<template>
  <div class="container" id="User">
    <b-row id="settings-button">
      <b-col sm="12" class="py-3">
        <font-awesome-icon icon="bars" id="settings" class="fa-2x"/>
      </b-col>
    </b-row>
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
