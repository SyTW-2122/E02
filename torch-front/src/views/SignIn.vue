<template>
  <div class="sign-in">
    <div class="welcome">
      <img src="../assets/torch-logo.png" alt="">
      <h1>Welcome</h1>
    </div>
    <div class="passport-buttons">
      <button class="login-google">Login with Google</button>
      <button class="login-facebook">Login with Facebook</button>
    </div>
    <div class="separator">
      <div class="line"></div>
      <p>or</p>
      <div class="line"></div>
    </div>
  </div>
</template>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
}

h1 {
  text-align: center;
}

button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
}

.separator {
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
}

.separator p {
  padding: 0 10px;
  opacity: 0.2;
  color: #000;
}

.separator .line {
  flex: 1;
  height: 1px;
  background-color: #000;
  opacity: 0.1
}

</style>
