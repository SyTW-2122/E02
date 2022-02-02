<template>
  <div class="container">
    <b-row>
      <b-col cols="2">
        holi
      </b-col>
      <b-col v-for="i in images" :key="i">
        <b-img
        fluid
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
  },
};

</script>

<style>

</style>
