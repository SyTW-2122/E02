<template>
  <b-row align-v="center" align-h="center" class="fill" fluid>
    <b-col  cols="6"
      class="text-center bg-light p-3 rounded shadow" >
      <b-form v-if="show === 0">
        <b-form-group id="input-old-pass">
          <b-form-input
            type="password"
            v-model="oldPass" placeholder="Enter current password"></b-form-input>
          <div v-if="failed"
            class="alert alert-danger"
            role="alert"
          ><p>Introduced password isn't right you have {{lives}} attempts left</p></div>
          <b-button
          @click="tryOld"
          class="m-3 px-5"
          block
          variant="primary"> enter </b-button>
        </b-form-group>
      </b-form>
      <b-form v-if="show === 1">
        <b-form-group id="input-new-pass">
          <b-form-input
            type="password"
            name="pass"
            v-validate="'required|min:6|max:40'"
            v-model="newPass"
            placeholder="Enter new password"></b-form-input>
          <div v-if=" errors.has('pass')"
            class="alert alert-danger"
            role="alert"
          >{{errors.first('pass')}}</div>
          <b-form-input
            type="password"
            name="repeat"
            class="my-3"
            @input="compareNew"
            v-validate="'required'"
            v-model="newPassRepeat"
            placeholder="Repeat new password"></b-form-input>
          <div v-if="showValidationError"
            class="alert alert-danger"
            role="alert"
          >Passwords must match</div>
          <b-button
          v-if="showSubmit"
          class="m-3 px-5"
          @click="submitNew"
          block
          variant="success"> enter </b-button>
        </b-form-group>
      </b-form>
      <div v-if="show === 2">
        <p class="fs-3">too many attempts, your account has been closed!</p>
        <b-button variant="outline-warning" to="/">
          Okay
        </b-button>
      </div>
      <div v-if="show === 3">
        <p class="fs-3">Password changed successfully</p>
        <b-button variant="info" class="text-white" to="/">
          Login again
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      failed: false,
      message: false,
      authUser: {},
      show: 0,
      lives: 3,
      showValidationError: false,
      showSubmit: false,
      oldPass: '',
      newPass: '',
      newPassRepeat: '',
    };
  },
  created() {
    this.$store.dispatch('user/getByUsername', this.$route.params.name).then(
      (data) => {
        this.authUser = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
  methods: {
    tryOld() {
      if (this.oldPass !== '') {
        this.authUser.password = this.oldPass;
      }
      this.$store.dispatch('auth/login', this.authUser).then(
        () => {
          this.show = 1;
        },
        (error) => {
          this.failed = true;
          this.message = (error.response && error.response.data)
            || error.message
            || error.toString();
          this.lives -= 1;
          if (this.lives === 0) {
            this.$store.dispatch('auth/logout');
            this.show = 2;
          }
        },
      );
    },
    submitNew() {
      const obj = {
        u: this.authUser,
        p: this.newPass,
      };
      this.$store.dispatch('user/changePassword', obj).then(
        () => {
          this.$store.dispatch('auth/logout');
          this.show = 3;
        },
        (error) => {
          this.failed = true;
          this.message = (error.response && error.response.data)
            || error.message
            || error.toString();
          this.lives -= 1;
          if (this.lives === 0) {
            this.$store.dispatch('auth/logout');
            this.show = 2;
          }
        },
      );
    },
    compareNew() {
      this.showValidationError = this.newPass !== this.newPassRepeat;
      if (this.newPass === this.newPassRepeat) {
        this.showSubmit = true;
      } else {
        this.showSubmit = false;
      }
    },
  },
};
</script>

<style>
</style>
