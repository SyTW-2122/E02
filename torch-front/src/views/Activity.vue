<template>
  <div class="activity">
    <div class="container">
      <header class="jumbotron">
        <h3>{{content}}</h3>
      </header>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: '',
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/sign-in');
    }
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content = (error.response && error.response.data)
        || error.message
        || error.toString();
      },
    );
  },
};
</script>
