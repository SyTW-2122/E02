<template>
    <div class="container">
      <MobileStoriesSlider />
    </div>
</template>

<script>
import MobileStoriesSlider from '@/components/MobileStoriesSlider.vue';

export default {
  name: 'Home',
  data() {
    return {
      content: 'Content for activity page!',
    };
  },
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
  components: {
    MobileStoriesSlider,
  },
};
</script>
