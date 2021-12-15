<template>
  <div class="container">
    <div class="row">
      <div class="logo col-12">
        <img src="../assets/images/torch-logo.png" alt="Logo" class="img-fluid">
      </div>
      <div class="col-12 text-center mt-2">
        <h1 class="display-4 font-weight-bold">Welcome</h1>
      </div>
      <div class="login-google col-12 col-md-6 text-center mt-2">
        <a class="btn btn-primary btn-lg mb-1">
          <img src="../assets/images/google.png" alt="Google" class="img-fluid h-100">
          Login with Google
        </a>
      </div>
      <div class="login-facebook col-12 col-md-6 text-center mt-2">
        <a class="btn btn-primary btn-lg mb-3">
          <img src="../assets/images/facebook.svg" alt="Logo" class="img-fluid h-100">
          Login with Facebook
        </a>
      </div>
      <div class="line col-5 mt-2"></div>
      <div class="or col-2 text-center">Or</div>
      <div class="line col-5 mt-2"></div>
      <div class="login-form col-12 text-center mt-2">
        <b-form @submit.prevent="handleLogin">
          <b-form-group
            id="input-group-email"
            label=""
            label-for="input-email"
            class="input-group-email text-center"
          >
            <b-form-input
                id="input-email"
                type="text"
                v-model="user.email"
                v-validate="'required'"
                placeholder="Email Address"
                class="input-email border-bottom"
            ></b-form-input>
            <div
              v-if="errors.has('email')"
              class="alert alert-danger"
              role="alert"
            >Email address is required!</div>
          </b-form-group>
          <b-form-group
            id="input-group-password"
            label=""
            label-for="input-password"
            class="input-group-password mt-2"
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
          <b-form-group
            id="input-group-repeat-password"
            label=""
            label-for="input-password"
            class="input-group-repeat-password mt-2"
            >
            <b-form-input
              id="input-password"
              type="password"
              v-model="user.password"
              v-validate="'required'"
              placeholder="Repeat password"
              class="input-password border-bottom"
            ></b-form-input>
            <div
              v-if="errors.has('password')"
              class="alert alert-danger"
              role="alert"
            >Password do not match!</div>
          </b-form-group>
          <div class="login-button mt-2">
            <b-button pill type="submit" variant="primary">SIGN UP</b-button>
          </div>
          <div class="create-account mt-2">
            <p>Already have an account?&nbsp;<a href="">Login here</a></p>
          </div>
        </b-form>
      </div>
    </div>
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
.logo {
  width: 250px;
  margin:auto;
}
.login-google a {
  width: 250px;
  height: 45px;
  background-color: #FFFFFF;
  color: #000000;
  font-size: 13px;
}

.login-facebook img {
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(59deg) brightness(115%) contrast(100%);
}

.login-facebook a{
  width: 250px;
  height: 45px;
  background-color: #3b5998;
  font-size: 13px;
}

.line {
  height: 2px;
  background-color: #000000;
  opacity: 0.2;
}

.login-form {
  margin:auto;
  width: 400px;
  height: 35px;
}
</style>
