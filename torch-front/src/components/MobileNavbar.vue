<template>
  <b-nav class="navbar fixed-bottom">
    <b-nav-item to="/activity" >
      <font-awesome-icon icon="home" class="fa-md"/>
    </b-nav-item>
    <b-nav-item to="/explore">
      <font-awesome-icon icon="search" class="fa-md"/>
    </b-nav-item>
    <b-nav-item :to="`/${this.user.data.username}`">
      <font-awesome-icon icon="user-circle" class="fa-md"/>
    </b-nav-item>
  </b-nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MobileNavbar',

  props: {
    msg: String,
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    changeRoute() {
      this.$router.push(`/${this.user.data.username}`);
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #00dbde;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 0px 10px 0
            rgba(0, 0, 0, 0.3), 0
            2px 10px 0 rgba(0, 0, 0, 0.5);
}

/* Style the links inside the navigation bar */
.navbar a {
  float: left;
  display: block;
  color: #99F1F2;
  text-align: center;
  padding: 0px 35px;
  text-decoration: none;
  font-size: 20px;
  margin-bottom: 1.3em;
  top: 0;
}

/* Add a color to the active/current link */
.navbar a.router-link-active {
  color: var(--bg-dark-teal);
  filter: drop-shadow( 0px 2px 1px rgba(0, 0, 0, 0.30));
}

</style>
