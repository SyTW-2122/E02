<template>
  <div class="container">
    <b-row class="mt-2">
      <b-col class="p-0" cols="3">
        <b-img
        fluid
        center
        class="img-sm-limit center-sm-cropped"
        rounded="circle"
        :src="authImage" />
      </b-col>
      <b-col class="p-0" cols="3" v-for="i in images" :key="i">
        <b-img
        fluid
        center
        class="img-sm-limit center-sm-cropped"
        rounded="circle"
        :src="i" />
      </b-col>
    </b-row>
  </div>
</template>

<script>

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
              this.images.push(image.dataUrl);
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
            this.authImage = image.dataUrl;
          },
        );
      },
    );
  },
};

</script>

<style>

</style>
