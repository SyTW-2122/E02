<template>
  <div>
    <div class="container" id="Explorer">
      <b-row class="search-bar">
        <b-col cols="2">
          <font-awesome-icon icon="search" class="fa-2x"/>
        </b-col>
        <b-col cols="10">
          <b-form-input id="input-default" placeholder="Search"></b-form-input>
        </b-col>
      </b-row>
    </div>
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
.search-bar {
  padding: 40px 35px;
}
</style>
