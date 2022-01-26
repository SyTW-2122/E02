<template class="">
  <b-container fluid class="background px-5">
    <b-row fluid class="h-100 w-100">
      <b-col class="sign-in" cols="5" lg="4">
        <b-row class="welcome">
          <b-col cols="12">
            <img src="../assets/images/torch-logo.png" alt="">
          </b-col>
          <b-col class="h-100" cols="12">
          <h1>Welcome</h1>
          </b-col>
        </b-row>
        <b-row class="passport-google pb-1" align="center">
            <b-col cols="12">
              <b-button pill class="h-100 login-google">
                <img src="../assets/images/google.png" align="left" alt=""/>
                <p>Login with Google</p>
              </b-button>
            </b-col>
        </b-row>
        <b-row class="passport-facebook pt-0" align="center">
            <b-col cols="12" xs="3">
              <b-button pill class="h-100 login-facebook">
                <img src="../assets/images/facebook.svg" align="left" alt=""/>
                <p>Login with Facebook</p>
              </b-button>
            </b-col>
        </b-row>
        <b-row class="separator" align-v="center">
          <b-col cols="5">
            <div class="line"></div>
          </b-col>
          <b-col cols="2" class="text-center">
            <p>or</p>
          </b-col>
          <b-col cols="5">
            <div class="line"></div>
          </b-col>
        </b-row>
        <b-row class="py-4 px-4 px-md-2">
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
                  v-model="user.username"
                  v-validate="'required'"
                  placeholder="Enter username"
                  class="input-email border-bottom word-size"
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
                  v-model="user.password"
                  v-validate="'required'"
                  placeholder="Enter password"
                  class="input-password border-bottom word-size"
                  name="password"
              ></b-form-input>
              <div
                v-if="errors.has('password')"
                class="alert alert-danger"
                role="alert"
              >Password is required!</div>
              <b-form-checkbox class="text-center my-3" inline switch>
                <span class="mx-1">Remember me</span>
              <span class="bottom-form ms-2 ">
                <a href="" class="" inline>Forgot password?</a>
              </span>
              </b-form-checkbox>
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
            <div class="create-account mb-3 word-size">
              <p class="mx-2">Don't have an account?&nbsp;</p>
              <router-link to="/sign-up">Create a torch account</router-link>
            </div>
          </b-form>
        </b-row>
      </b-col>
      <b-col md="7" class="pt-5" v-if="!mobile">
        <b-row align="center">
          <b-col align="center" class="mockup pt-5" cols="12" >
            <img class="mockup-img pt-5" src="../assets/images/mockup-1.png" alt="">
          </b-col>
        </b-row>
        <b-row>
          <b-col align="center" cols="12">
            <p class="text-white">Text</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapState } from 'vuex';
import User from '../models/user';

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
    };
  },
  props: ['mobile'],
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

.welcome img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  width: 22vw;
  height: 12vh;
  object-fit: contain;
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
  margin-top: 3vh;
}
.separator p {
  padding: 0 0px;
  opacity: 0.2;
  color: #000;
  margin-top: 10px;
  height: 5vh;
  margin: auto;
}
.separator .line {
  flex: 1;
  height: 1px;
  background-color: #000;
  opacity: 0.1;
}
.passport-google {
  padding: 0 0;
}
.login-google {
  background-color: #FFF;
}
.login-google img {
  width: 25px;
}
.login-google p {
  display: inline;
  color: #000;
  font-size: 12px;
}
.login-facebook {
  background-color: #3b5998;
}
.login-facebook img {
  width: 25px;
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(59deg) brightness(115%) contrast(100%);
}
.login-facebook p {
  display: inline;
  font-size: 11px;
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
  font-size: 12px;
}
.input-group-password {
  margin-bottom: 20px;
}
.input-password {
  border: none;
  font-size: 12px;
}
.remember-me{
  display: inline-block;
  height: 100%;
  margin-top: 15px;
  font-size: 12px;
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
  margin-top: 5%;
}
.login-button button {
  width: 170px;
  height: 60px;
  background-color: #00DBDE;
  border: none;
  font-size: 20px;
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
.forgot-password {
  font-size: 12px;
}

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
    .sign-in {
    background-color: #FFF;
    margin-top: 1%;
    margin-bottom: 1%;
    border-radius: 40px;
    filter: drop-shadow(30px 10px 4px #55525244);
  }
  .word-size {
    font-size: 16px;
  }
  .mockup-img {
    width: 35vw;
    height: auto;
    vertical-align: middle;
    filter: drop-shadow(30px 10px 3px #433f3f79);
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

</style>
