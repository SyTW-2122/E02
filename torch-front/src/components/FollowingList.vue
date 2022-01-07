<template>
    <b-container
      class="my-4 p-2">
      <b-row class="ms-5">
        <router-link tag="div" :to="{ path: `/${urlUser.username}` }">
          <font-awesome-icon
          icon="chevron-left" id="settings"  class="fa-2x"/>
          </router-link>
      </b-row>
      <h1 class="text-center">Following</h1>
      <b-row align-h="center">
        <b-col
        v-for="(username, index) in urlUser.following" :key="index"
        cols=10
        class="text-end pe-5  fs-4  text-white py-3 my-1 bg-secondary rounded" >
          <router-link tag="div" :to="{ path: `/${username}` }">
            {{ username }}
          </router-link>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>

export default {
  data() {
    return {
      urlUser: {},
    };
  },
  created() {
    this.$store.dispatch('user/getByUsername', this.$route.params.name).then(
      (data) => {
        this.urlUser = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
};
</script>
