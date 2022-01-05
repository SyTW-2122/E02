<template>
  <div class = "background">
    <b-container fluid="lg" class="explorer">
      <b-row class="search">
        <b-col cols="10">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-col>
        <b-col cols="2">
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-col>
      </b-row>
    </b-container>
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
.background {
    position:fixed;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
}

</style>
