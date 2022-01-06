<template>
  <div class = "background">
    <b-container fluid="lg" class="sign-in">
      <b-row class="welcome">
        <b-col cols="12">
          <img src="../assets/images/torch-logo.png" alt="">
        </b-col>
        <b-col cols="12">
        <h1>Welcome</h1>
        </b-col>
      </b-row>
      <b-row class="passport-google">
          <b-col cols="12">
            <b-button pill class="login-google">
              <img src="../assets/images/google.png" align="left" alt=""/>
              <p>Login with Google</p>
            </b-button>
          </b-col>
      </b-row>
      <b-row class="passport-facebook">
          <b-col cols="12">
            <b-button pill class="login-facebook">
              <img src="../assets/images/facebook.svg" align="left" alt=""/>
              <p>Login with Facebook</p>
            </b-button>
          </b-col>
      </b-row>
      <b-row class="separator" align-v="center">
        <b-col>
          <div class="line"></div>
        </b-col>
        <b-col cols="1" xl="2" class="text-center">
          <p>or</p>
        </b-col>
        <b-col>
          <div class="line"></div>
        </b-col>
      </b-row>
      <div class="login-form">
        <b-form-row>
          <b-form @submit.prevent="handleLogin">
            <b-form-group
              id="input-group-email"
              label=""
              label-for="input-email"
              class="input-group-email"
            >
              <b-form-input
                  id="input-email"
                  type="text"
                  v-model="attemptUser.username"
                  v-validate="'required'"
                  placeholder="Enter username"
                  class="input-email border-bottom"
                  name="username"
              ></b-form-input>
              <div
                v-if="errors.has('username')"
                class="alert alert-danger username-alert"
                role="alert"
              >Username is required!</div>
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
                  v-model="attemptUser.password"
                  v-validate="'required'"
                  placeholder="Enter password"
                  class="input-password border-bottom"
                  name="password"
              ></b-form-input>
              <div
                v-if="errors.has('password')"
                class="alert alert-danger"
                role="alert"
              >Password is required!</div>
              <b-row class="bottom-form" align-h="between">
                <b-col cols="6">
                  <b-form-checkbox class="remember-me">&nbsp;Remember me</b-form-checkbox>
                </b-col>
                <b-col cols="6">
                  <p><a href="" class="forgot-password">Forgot password?</a></p>
                </b-col>
              </b-row>
            </b-form-group>
            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">{{message.msg}}</div>
            </div>
            <div class="login-button">
              <b-button pill type="submit" variant="primary" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Login</span>
              </b-button>
            </div>
            <div class="create-account">
              <p class="mx-2">Don't have an account?&nbsp;</p>
              <router-link to="/sign-up">Create a torch account</router-link>
            </div>
          </b-form>
        </b-form-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import User from '../models/user';

export default {
  name: 'Login',
  data() {
    return {
      attemptUser: new User('', ''),
      loading: false,
      message: '',
    };
  },
  computed: {
    ...mapState('auth', ['user']),
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push(`/${this.user.data.username}`);
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.attemptUser.username && this.attemptUser.password) {
          this.$store.dispatch('auth/login', this.attemptUser).then(
            () => {
              this.$router.push(`/${this.user.data.username}`);
            },
            (error) => {
              this.loading = false;
              this.message = (error.response && error.response.data)
                || error.message
                || error.toString();
            },
          );
        }
      });
    },
  },
};
</script>

<style scoped>

@media screen and (min-width: 1025px) {
  .background {
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0.25turn,#7B00DB, #00DBDE);
  }
}

@media screen and (max-width: 1025px) {
  .sign-in {
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: #FFF;
  }
}

@media screen and (min-width: 1025px) {
  .sign-in {
    padding:0;
    margin:0;
    background-color: #FFF;
    height: 96%;
    width: 30%;
    margin-left: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    border-radius: 40px;
  }
}

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
  margin-top: 10px;
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
  height: 100%;
  margin-top: 10px;
}

.bottom-form a{

  color: #00DBDE;
  text-decoration: none;
  margin-top: 10px;
}

.bottom-form p {
  text-align: right;
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
