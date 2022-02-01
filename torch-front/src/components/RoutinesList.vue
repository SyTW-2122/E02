<template>
    <b-container
      class="my-4 p-2">
      <b-row class="ms-5">
        <router-link tag="div" :to="{ path: `/${urlUser.username}` }">
          <font-awesome-icon
          icon="chevron-left" id="settings"  class="fa-2x"/>
          </router-link>
      </b-row>
      <h1 class="text-center">{{user.data.username}}'s routines</h1>
      <b-row
        class="bg-light py-2 mt-3 shadow rounded"
        align-h="center" v-for="(pair, index) in images" :key="index">
        <router-link tag="div" :to="{ path: `/${pair.username}` }">
          <b-col
          cols=5
          class="text-start px-5" >
            <b-img
            fluid
            id="picture"
            rounded="circle"
            class="img-sm-limit center-sm-cropped"
            alt="profile picture"
            :src="pair.url === undefined ? defaultImage : pair.url"
            />
          </b-col>
          <b-col
          cols=5
          align-h="center"
          class="px-5 fs-4" >
              {{ pair.username }}
          </b-col>
        </router-link>
      </b-row>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';

const defaultImg = require('@/assets/images/torch-logo-black.png');

export default {
  data() {
    return {
      urlUser: {},
      images: [],
      defaultImage: defaultImg,
    };
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  async created() {
    await this.$store.dispatch('user/getByName', this.$route.params.name).then( // eslint-disable-line
      async (data) => {
        this.urlUser = data;
        for (let i = 0; i < data.followers.length; i += 1) {
          this.$store.dispatch('user/getUserImage', data.followers[i]).then(
            (image) => {
              this.$store.dispatch('user/getById', data.followers[i]).then(
                (userName) => {
                  console.log(userName);
                  this.images.push({ username: userName.username, url: image.dataUrl });
                },
              );
            },
          );
        }
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
};
</script>
