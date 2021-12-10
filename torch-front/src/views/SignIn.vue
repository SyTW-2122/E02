<template>
  <div class="sign-in">
    <div class="welcome">
      <img src="../assets/images/torch-logo.png" alt="">
      <h1>Welcome</h1>
    </div>
    <div class="passport-google">
        <b-button pill class="login-google">
          <img src="../assets/images/google.png" alt=""/>
          <p>Login with Google</p>
        </b-button>
    </div>
    <div class="passport-facebook">
        <b-button pill class="login-facebook">
          <img src="../assets/images/facebook.svg" alt=""/>
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
          label=""
          label-for="input-email"
          class="input-group-email"
        >
          <b-form-input
              id="input-email"
              type="email"
              placeholder="Enter email"
              class="input-email border-bottom"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-password"
          label=""
          label-for="input-password"
          class="input-group-password"
        >
          <b-form-input
              id="input-password"
              type="password"
              placeholder="Enter password"
              class="input-password border-bottom"
          ></b-form-input>
          <div class="bottom-form">
            <b-form-checkbox class="remember-me">&nbsp;Remember me</b-form-checkbox>
            <a href="" class="forgot-password">Forgot password?</a>
          </div>
        </b-form-group>
        <div class="login-button">
          <b-button pill type="submit" variant="primary">LOGIN</b-button>
        </div>
        <div class="create-account">
          <p>Don't have an account?&nbsp;</p>
          <a href="">Create a torch account</a>
        </div>
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

.login-form {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
}

.input-group-email {
  margin-bottom: 20px;
}

.input-email {
  border: none;
}

.input-group-password {
  margin-bottom: 20px;
}

.input-password {
  border: none;
}

.remember-me{
  display: inline-block;
  width: 50%;
  height: 100%;
  margin-top: 10px;
}

.bottom-form a{
  display: inline-block;
  position: fixed;
  right: 40px;
  color: #00DBDE;
  text-decoration: none;
  margin-top: 10px;
}

.login-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.login-button button {
  width: 200px;
  height: 70px;
  background-color: #00DBDE;
  border: none;
  font-size: 25px;
}

.create-account {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 13px;
}

.create-account p{
  margin-bottom: 0;
}

.create-account a{
  color: #00DBDE;
  text-decoration: none;
}

</style>
