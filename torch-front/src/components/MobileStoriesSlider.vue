<template>
  <div class="container">
    <b-row class="mt-3 border-bottom">
      <b-col class="p-0" cols="3">
        <b-img
        fluid
        center
        class="img-sm-limit center-sm-cropped"
        rounded="circle"
        :src="authImage" />
      </b-col>
      <b-col class="p-0 mb-2" cols="3" v-for="i in images" :key="i">
        <b-img
        fluid
        center
        class="img-sm-limit center-sm-cropped bg-secondary"
        rounded="circle"
        :src="i" />
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
        for (let i = 0; i < data.following.length; i += 1) {
          this.$store.dispatch('user/getUserImage', data.following[i]).then(
            (image) => {
              if (image !== null) {
                this.images.push(image.dataUrl);
              } else {
                this.images.push(defaultImg);
              }
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

</style>
