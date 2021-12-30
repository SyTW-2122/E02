<template>
  <div class="container" id="User">
    <header class="jumbotron">
      <h3>
        <strong>{{getUserName}}'s</strong> Profile
      </h3>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'User',
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['getUserName']),
  },
  mounted() {
    if (!this.user) {
      this.$router.push('/sign-in');
    }
  },
};
</script>
