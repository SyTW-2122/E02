<template>
  <div class = "background">
  </div>
</template>

<script>
export default {
  name: 'Explore',
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

<style scoped>
@media screen and (min-width: 1025px) {
  .background {
    position:fixed;
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
}
</style>