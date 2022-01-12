<template>
    <b-container
      class="text-center my-4 p-2">
      <b-row id="nav-header " class="pt-4">
        <b-col
        cols=6
        order="0"
        class="ps-0 text-sm-start">
          <b-button
          size="lg"
          class="b-link"
          :to="{ path: `/${authUser.username}` }"
          variant="link">Cancel</b-button>
        </b-col>
        <b-col
        cols="12"
        order="2"
        class="p-1">
          <b-img
            v-if="!hasImage"
            id="picture"
            :src="imageUrlUpdate"
            fluid
            rounded="circle"
            class="img-limit center-cropped"
            alt="profile picture"
          ></b-img>
          <b-img
            v-if="hasImage"
            id="picture"
            :src="imageUrlUpdate"
            fluid
            rounded="circle"
            class="img-limit center-cropped"
            alt="profile picture"
          ></b-img>
        </b-col>
        <b-col
        cols=6
        order="1"
        class="pe-2 text-sm-end">
          <b-button
          type="submit"
          @click="onSubmit"
          class="px-4"
          variant="primary">Done</b-button>
        </b-col>
      </b-row>
      <b-row class=" bg-info mx-5 my-3 py-2 fs-5 text-white rounded">
        <label for="fileInput" slot="upload-label">
        <image-uploader
        class="file-upload p-0 m-0"
          :show="false"
          v-model="form.image"
          :preview="false"
          :quality="0.9"
          capture="environment"
          :debug="1"
          doNotResize="gif"
          :autoRotate="true"
          outputFormat="verbose"
          @input="setImage"
        >
      </image-uploader>
          <span class="upload-caption">{{
            hasImage ? "Replace" : "Click to upload"
          }}</span>
      </label>
      </b-row>
      <b-row class="my-5 text-start p-3">
        <b-form @submit="onSubmit" v-if="show" class="">
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="input-username"
            class="py-3"
          >
            <b-form-input
              id="input-username"
              v-model="form.username"
              class="text-capitalize"
              type="text"
              :placeholder="user.data.username"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Subname:"
            class="py-3"
            label-for="input-subname"
          >
            <b-form-input
              id="input-subname"
              v-model="form.subname"
              class="text-capitalize"
              type="text"
              :placeholder="user.data.subname"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Email address:"
            class="py-3"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              :placeholder="user.data.email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
          id="textarea"
          label="Bio:"
          class="py-3"
          label-for="input-2">
            <b-form-textarea
              id="textarea"
              v-model="form.bio"
              :placeholder="user.data.bio"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

        </b-form>
      </b-row>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';

const defaultImg = require('@/assets/images/torch-logo-black.png');

export default {
  data() {
    return {
      authUser: null,
      imageUrl: '',
      defaultImage: defaultImg,
      hasImage: false,
      show: true,
      form: {
        urlUsername: '',
        username: '',
        password: '',
        subname: '',
        email: '',
        bio: '',
        image: null,
      },
    };
  },
  methods: {
    setImage(output) {
      this.hasImage = true;
      this.form.image = output;
    },
    onSubmit(event) {
      this.form.password = this.user.data.password;
      this.form.urlUsername = this.user.data.username;
      if (!this.hasImage) {
        this.form.image = this.user.data.image;
      }
      event.preventDefault();
      this.$store.dispatch('user/edit', this.form).then(
        (data) => {
          this.msg = data.msg;
          this.successful = true;
          this.$router.push('/');
        },
        (error) => {
          this.message = (error.response && error.response.data)
          || error.message
          || error.toString();
          this.successful = false;
        },
      );
    },
  },
  created() {
    this.$store.dispatch('user/getByUsername', this.$route.params.name).then(
      (data) => {
        this.authUser = data;
        this.imageUrl = this.imageUrlUpdate;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
  mounted() {
    this.imageUrl = this.user.data.image === undefined
      ? this.defaultImage
      : this.user.data.image.dataUrl;
  },
  computed: {
    ...mapState('auth', ['user']),
    imageUrlUpdate() {
      if (this.form.image === null) {
        if (this.authUser.image === undefined) {
          return this.defaultImage;
        }
        return this.authUser.image.dataUrl;
      }
      return this.form.image.dataUrl;
    },
  },
};
</script>
