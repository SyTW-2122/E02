<template>
  <div class="explore">
    <h1>This is the explore page</h1>
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
      this.$router.push('/');
    }
  },
};
</script>
