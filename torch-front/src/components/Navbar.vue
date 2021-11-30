<template>
  <b-nav class="navbar">
    <b-nav-item to="/activity" class="text-">
      <font-awesome-icon icon="home" class="nav-icon"/>
    </b-nav-item>
    <b-nav-item to="/explore">
      <font-awesome-icon icon="search" class="nav-icon"/>
    </b-nav-item>
    <b-nav-item to="/user" >
      <font-awesome-icon icon="user-circle" class="nav-icon"/>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
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
}

/* Style the links inside the navigation bar */
.navbar a {
  float: left;
  display: block;
  color: #99F1F2;
  text-align: center;
  padding: 5px 40px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.navbar a:hover {
  color: #006e6f;
  filter: drop-shadow( 0px 2px 1px rgba(0, 0, 0, 0.25));
}

/* Add a color to the active/current link */
.navbar a.active {
  background-color: #04AA6D;
  color: white;
}

</style>
