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
      <form>
        <br />
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email address"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="repeatPassword"
            placeholder="Repeat password"
          />
        </div>
      </form>
    </b-col>
    <b-col></b-col>
  </b-row>
  <br />
  <b-row>
    <b-col></b-col>
    <center>
      <b-col>
        <button type="submit" class="btn btn-primary">SIGN UP</button>
      </b-col>
    </center>
    <b-col></b-col>
  </b-row>
  <br />
  <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="8">
      <p> Already have an account? Login here</p>
    </b-col>
    <b-col></b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: 'sign-up',
  data: () => ({
    email: '',
    password: '',
    confirm_password: '',
  }),
  methods: {
    register() {
      if (this.valid()) {
        this.$store.dispatch('REGISTER', {
          email: this.email,
          password: this.password,
        })
          .then(() => {
            this.$store.commit('SET NOTIFICATION', {
              display: true,
              messaje: 'Your account has been successfully created!',
            });
          });
      }
    },
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
