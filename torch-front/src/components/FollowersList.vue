<template>
    <b-container
      class="my-4 p-2">
      <b-row class="ms-5">
        <router-link tag="div" :to="{ path: `/${urlUser.username}` }">
          <font-awesome-icon
          icon="chevron-left" id="settings"  class="fa-2x"/>
          </router-link>
      </b-row>
      <h1 class="text-center">Followers</h1>
      <b-row align-h="center">
        <b-col
        v-for="(username, index) in urlUser.followers" :key="index"
        cols=10
        class="text-end pe-5  fs-4  text-white py-3 my-1 bg-secondary rounded" >
          <router-link tag="div" :to="{ path: `/${username}` }">
           <b-img
          fluid
          id="picture"
          rounded="circle"
          class="img-sm-limit center-cropped"
          alt="profile picture"
          :src="defaultImage"
          />
            {{ username }}
          </router-link>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
const defaultImg = require('@/assets/images/torch-logo-black.png');

export default {
  data() {
    return {
      urlUser: {},
      images: [],
      defaultImage: defaultImg,
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
  methods: {
    userImage(username) {
      this.$store.dispatch('user/getUserImage', username).then(
        (data) => data.dataUrl,
        (error) => {
          console.log(`failed: ${error}`);
        },
      );
      return this.defaultImg;
    },
  },
};
</script>
