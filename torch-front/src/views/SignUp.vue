<template>
  <div class = "background">
    <b-container fluid="lg" class="sign-up">
      <b-row class="welcome">
        <b-col cols="12">
          <img src="../assets/images/torch-logo.png" alt="Logo" class="img-fluid">
        </b-col>
        <b-col cols="12">
          <h1 class="text-center mt-10">Welcome</h1>
        </b-col>
      </b-row>
      <b-row class="passport">
        <div class="passport-google col-lg-6">
          <b-col cols="12">
            <b-button pill class="login-google">
              <img src="../assets/images/google.png" align="left" alt=""/>
              <p>Login with Google</p>
            </b-button>
          </b-col>
        </div>
        <div class="passport-facebook col-lg-6">
          <b-col cols="12">
            <b-button pill class="login-facebook">
              <img src="../assets/images/facebook.svg" align="left" alt=""/>
              <p>Login with Facebook</p>
            </b-button>
          </b-col>
        </div>
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
      <div class="register-form">
        <b-form-row @submit.prevent="handleLogin">
          <b-form-group
            id="input-group-username"
            label=""
            label-for="input-username"
            class="input-group-username"
          >
            <b-form-input
              id="input-username"
              type="text"
              v-model="user.username"
              v-validate="'required'"
              placeholder="Username"
              class="input-username border-bottom"
            ></b-form-input>
            <div
              v-if="errors.has('username')"
              class="alert alert-danger"
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
              placeholder="Password"
              class="input-password border-bottom"
            ></b-form-input>
            <div
              v-if="errors.has('password')"
              class="alert alert-danger"
              role="alert"
            >Password is required!</div>
          </b-form-group>
          <div class="signup-button">
            <b-button pill type="submit" variant="primary">SIGN UP</b-button>
          </div>
          <div class="login-here">
            <p>Already have an account?&nbsp;</p>
            <a href="">Login here</a>
          </div>
        </b-form-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'sign-up',
  data() {
    return {
      submitted: false,
      successful: false,
      message: '',
      user: new User('', ''),
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then((isValid) => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
            },
            (error) => {
              this.message = (error.response && error.response.data)
              || error.message
              || error.toString();
              this.successful = false;
            },
          );
        }
      });
    },
    submitTrue() { return this.submitted; },
    successTrue() { return this.submitted; },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1025px) {
  .background {
    position:fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(0.25turn,#7B00DB, #00DBDE);
  }
}

.sign-up {
  background-color: #FFFFFF;
  border-radius: 20px;
  margin-top: 55px;
  margin-bottom: 55px;
}

.welcome img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  width: 120px;
}

.separator {
  margin-left: 50px;
  margin-right: 50px;
}

.separator p {
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
  width: 200px;
  height: 45px;
  background-color: #FFFFFF;
  margin-top: 4px;
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
  margin-top: 4px;
}

.login-facebook img {
  width: 25px;
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(59deg) brightness(115%) contrast(100%);
}

.login-facebook p {
  display: inline;
  font-size: 13px;
}

.input-password {
  border: none;
}

.input-group-username {
  margin-bottom: 20px;
}

.input-group-password {
  margin-bottom: 20px;
}

.input-username {
  border: none;
}

.signup-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.signup-button button {
  width: 200px;
  height: 70px;
  background-color: #00DBDE;
  border: none;
  font-size: 25px;
}

.login-here {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 13px;
}

.login-here p{
  margin-bottom: 0;
}

.login-here a{
  color: #00DBDE;
  text-decoration: none;
}
</style>
