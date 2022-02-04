<template>
  <div class="container">
    <b-row class="slider mt-3 border-bottom flex-nowrap">
      <b-col class="p-0" cols="3">
        <b-img
        fluid
        center
        class="img-sm-limit center-sm-cropped"
        rounded="circle"
        :src="authImage" />
      </b-col>
      <b-col class="p-0 mb-2" cols="3" v-for="(pair, i) in images" :key="i">
        <router-link :to="{ path: `/${pair.followName}`}">
        <b-img
          fluid
          center
          class="img-sm-limit center-sm-cropped bg-secondary"
          rounded="circle"
          :src="pair.url" />
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>

const defaultImg = '../assets/images/torch-logo-black.png';

export default {
  name: 'MobileStoriesSlider',
  data() {
    return {
      user: {},
      images: [],
      authImage: '',
      authUser: '',
    };
  },
  async created() {
    await this.$store.dispatch('user/getByName', this.$route.params.name).then(
      async (data) => {
        this.user = data;
        //  This for should take data.following.length
        for (let i = 0; i < data.following.length; i += 1) {
          this.$store.dispatch('user/getUserImage', data.following[i]).then(
            (image) => {
              this.$store.dispatch('user/getById', data.following[i]).then(
                (followingName) => {
                  this.images.push({ followName: followingName.username, url: image.dataUrl });
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
    await this.$store.dispatch('user/getByUsername', this.$route.params.name).then(
      async (data) => {
        this.authUser = data;
        this.$store.dispatch('user/getUserImage', data._id).then(  // eslint-disable-line
          (image) => {
            if (image !== null) {
              this.authImage = image.dataUrl;
            } else {
              this.authImage = defaultImg;
            }
          },
        );
      },
    );
  },
};

</script>

<style>
.slider {
  overflow-x: auto;
  scrollbar-width: none;
}
</style>
