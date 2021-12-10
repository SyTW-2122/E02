<template>
  <div class="sign-in">
    <div class="welcome">
      <img src="../assets/torch-logo.png" alt="">
      <h1>Welcome</h1>
    </div>
    <div class="passport-google">
        <b-button pill class="login-google">
          <img src="../assets/google.png" alt=""/>
          <p>Login with Google</p>
        </b-button>
    </div>
    <div class="passport-facebook">
        <b-button pill class="login-facebook">
          <img src="../assets/facebook.svg" alt=""/>
          <p>Login with Facebook</p>
        </b-button>
    </div>
    <div class="separator">
      <div class="line"></div>
      <p>or</p>
      <div class="line"></div>
    </div>
    <div class="login-form">
      <b-form>
        <b-form-group
          id="input-group-email"
          label="Email"
          label-for="input-email"
        >
          <b-form-imput
              id="input-email"
              type="email"
              placeholder="Enter email"
          ></b-form-imput>
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.welcome img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 120px;
}

h1 {
  text-align: center;
  margin-top: 5px;
}

.passport-buttons {
  align-items: center;
}

.separator {
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
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
  opacity: 0.1;

}

.login-google {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  width: 200px;
  height: 45px;
  background-color: #FFF;
  margin-top: 40px;
}

.login-google img {
  width: 25px;
}

.login-google p {
  display: inline;
  color: #000;
  font-size: 13px;
}

.login-facebook {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 45px;
  background-color: #3b5998;
}

.login-facebook img {
  width: 25px;
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(59deg) brightness(115%) contrast(100%);
}

.login-facebook p {
  display: inline;
  font-size: 13px;
  margin-left: 10px;
}

</style>
