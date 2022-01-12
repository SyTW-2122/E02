<template>
  <div>
    <nav class="navbar navbar-dark bg-teal justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand text-white float-left " href="#">
          <img
            src="../assets/images/torch-inline-white(1).png"
            alt=""
            width="200"
            class="img-fluid">
        </a>
        <ul class="nav navbar-nav justify-content-between flex-nowrap flex-row ">
          <li class="nav-item mx-5 px-5" to="/activity">
            <b-nav-item to="/activity">
              ACTIVITY
            </b-nav-item>
          </li>
          <li class="nav-item mx-5 px-5" to="/explore">
            <b-nav-item to="/explore" >
              EXPLORE
            </b-nav-item>
          </li>
          <li class="nav-item mx-5 px-5" to="/activity">
            <b-nav-item
            :to="{ path: `/${user.data.username}` }"
            class="mx-6">
              PROFILE
            </b-nav-item>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['user']),
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/sign-in');
    },
  },
};
</script>

<style scoped>

  .bg-teal {
  background-color: var(--bg-primary-teal);
  box-shadow: 0 0px 4px 0
            rgba(0, 0, 0, 0.3), 0
            2px 10px 0 rgba(0, 0, 0, 0.5);
  }
  .nav a {
  color: var(--bg-ligth-teal);
  text-align: center;
  text-decoration: none;
  }
  .nav a.router-link-active {
    color: var(--bg-dark-teal) !important;
    filter: drop-shadow( 0px 2px 1px rgba(0, 0, 0, 0.30));
    border-bottom: 1px solid var(--bg-dark-teal);
  }
</style>
