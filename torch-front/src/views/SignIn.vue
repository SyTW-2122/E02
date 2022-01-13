<template>
  <div class = "background">
    <b-container class="sign-in">
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
    </b-container>
  </div>
</template>

<script>
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
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/user');
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

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/user');
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

@media screen and (max-width: 600px) {
  .background {
    background-color: blue;
    width: 100%;
    height: 100%;
  }
  .sign-in {
    background-color: red;
    width: 100%;
    height: 100%;
    padding: 0 0;
  }
  .welcome {
    box-sizing: border-box;
    width: 100%;
    height: 10%;
    padding: 0 0;
  }
  .welcome img {
  width: 25vw;
  height: auto;
    display: block;
  margin-left: auto;
  margin-right: auto;

  }
  .welcome h1 {
    text-align: center;
    width: 100%;
    height: auto;
  }

  .passport-google {
    width: 100vw;
    height: 10vh;
  }

  .passport-google img {
    width: 5vh;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
        padding: 0 0;
  }

  .login-google {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  width: 50%;
  height: 50%;
  background-color: #FFF;
  color: black;
  }

}

</style>
