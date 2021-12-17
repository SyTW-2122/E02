<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.data.username}}'s</strong> Profile
      </h3>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Profile',
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
