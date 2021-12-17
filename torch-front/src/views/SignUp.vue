<template>
<b-container class="bv-example-row">
  <b-row>
    <b-col></b-col>
    <b-col cols="8">
    <br />
      <a href="#">
        <center><img
          src="../assets/torch-logo_Mesa de trabajo 1 copia.png"
          alt=""
          class="img-fluid"></center>
      </a>
    </b-col>
    <b-col></b-col>
  </b-row>
  <br />
   <b-row>
    <b-col></b-col>
    <b-col>
      <center><h1> Welcome </h1></center>
    </b-col>
    <b-col></b-col>
  </b-row>
  <div v-if="!successTrue()">
  <br />
  <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="8">
      <b-button pill variant="outline-secondary" style="width: 100%;">
      <img src="../assets/google.png" class="emo">&nbsp;&nbsp;Sign up with Google</b-button>
    </b-col>
    <b-col></b-col>
  </b-row>
  <br />
   <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="8">
      <b-button pill variant="primary" style="width: 100%;" class="button-face">
      <img src="../assets/facebook-brands.svg" class="emo-face">&nbsp;Sign up with Facebook
      </b-button>
    </b-col>
    <b-col></b-col>
  </b-row>
  <br />
  <b-row>
    <b-col>
      <div class="linea"></div>
    </b-col>
    <b-col>
      <center><p>Or</p></center>
    </b-col>
    <b-col>
      <div class="linea"></div>
    </b-col>
  </b-row>
  <b-row>
    <b-col></b-col>
    <b-col cols="8">
      <form name="form" @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              v-model="user.username"
              v-validate="'required|min:3|max:20'"
              type="text"
              class="form-control"
              name="username"
              placeholder="Enter username"
            />
            <div
            v-if="submitTrue() && errors.has('username')"
            class="bg-danger"
            >{{errors.first('username')}}</div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="user.password"
              v-validate="'required|min:6|max:40'"
              type="password"
              class="form-control"
              name="password"
            />
            <div
              v-if="submitTrue() && errors.has('password')"
              class="alert-danger"
            >{{errors.first('password')}}</div>
          </div>
          <div class="form-group text-center my-3">
            <button type="submit" class="btn btn-success px-5">SIGN UP</button>
          </div>
      </form>
      <div
        v-if="message"
        class="alert"
        :class="successTrue() ? 'alert-success' : 'alert-danger'"
      >{{message.msg}}</div>
    </b-col>
    <b-col></b-col>
  </b-row>
  <br />
  <b-row>
    <b-col></b-col>
    <center>
      <b-col>
      </b-col>
    </center>
    <b-col></b-col>
  </b-row>
  <br />
  <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="8">
      <p> Already have an account?
          <router-link to="/sign-in">Login here</router-link></p>
    </b-col>
    <b-col></b-col>
  </b-row>
  </div>
  <div v-else class="text-center">
    <h1 class="text-success text-center">Account created succesfully</h1>
    <router-link to="/sign-in">
      <b-button class="btn-primary m-5">Go to login</b-button>
    </router-link>
  </div>
</b-container>
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
      this.$router.push('/user');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      console.log(this.user);
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
    successTrue() { return this.successful; },
  },
};
</script>

<style scoped>
.bv-example-row {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0px 2px 0
            rgba(0, 0, 0, 0.3), 0
            2px 10px 0 rgba(0, 0, 0, 0.5);
}

.btn-primary-Google {
background: #ffffff;
border-radius: 20px;
}
.background {
  background-image: linear-gradient(to bottom right, #00DBDE, #3E006E);
}

.linea {
  border-top: 1px solid black;
  height: 2px;
  padding: 0;
  margin: 20px auto 0 auto;
}

.img-fluid{
  width: 200px;
  height: auto;
}
.emo {
  width: 25px;
  height: 25px;
}

.emo-face {
  width: 25px;
  height: 25px;
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(59deg) brightness(115%) contrast(100%);
}

.button-face{
  background: #3b5998;
}
</style>
