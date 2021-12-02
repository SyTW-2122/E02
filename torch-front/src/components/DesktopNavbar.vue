<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-teal justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand text-white float-left " href="#">
          <img
            src="../assets/torch-inline-white(1).png"
            alt=""
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
            <b-nav-item to="/user" class="mx-6">
              PROFILE
            </b-nav-item>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<!--
<b-nav-item to="/activity" >
      <font-awesome-icon icon="home" class="nav-icon "/>
    </b-nav-item>
    <b-nav-item to="/explore">
      <font-awesome-icon icon="search" class="nav-icon"/>
    </b-nav-item>
    <b-nav-item to="/user" >
      <font-awesome-icon icon="user-circle" class="nav-icon "/>
    </b-nav-item>
-->
<style scoped>
  .bg-teal {
  background-color: #00dbde;
  box-shadow: 0 0px 4px 0
            rgba(0, 0, 0, 0.3), 0
            2px 10px 0 rgba(0, 0, 0, 0.5);
  }
  .nav a {
  color: #99F1F2;
  text-align: center;
  text-decoration: none;
  }
  .nav a.router-link-active {
    color: #006e6f !important;
    filter: drop-shadow( 0px 2px 1px rgba(0, 0, 0, 0.30));
    border-bottom: 1px solid #006e6f;
  }
</style>
