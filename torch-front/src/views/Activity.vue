<template>
    <div class="container">
      <MobileStoriesSlider />
      <b-row>
        <b-col cols="12">
          <ActivityPost />
        </b-col>
      </b-row>
    </div>
</template>

<script>
import MobileStoriesSlider from '@/components/MobileStoriesSlider.vue';
import ActivityPost from '@/components/ActivityPost.vue';

export default {
  name: 'Activity',
  data() {
    return {
      content: 'Content for activity page!',
      userActivity: {},
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
    ActivityPost,
  },
  created() {
  },
};
</script>
