<template>
  <div class="activity">
    <div class="container">
      <header class="jumbotron">
        <h3>{{content}}</h3>
      </header>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      content: 'Content for activity page',
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/sign-in');
    }
  },
};
</script>
