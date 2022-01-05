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
          :to="{ path: `/${user.data.username}` }"
          variant="link">Cancel</b-button>
        </b-col>
        <b-col
        cols="12"
        order="2"
        class="p-1">
          <b-img
            v-if="!hasImage"
            id="picture"
            src="https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            fluid
            rounded="circle"
            class="img-limit center-cropped"
            alt="profile picture"
          ></b-img>
          <b-img
            v-if="hasImage"
            id="picture"
            :src="image.dataUrl"
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
      <b-row>
        <image-uploader
        v-b-modal.modal-center
        v-model="image"
        :preview="false"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="verbose"
        @input="setImage"
      >
        <label for="fileInput" slot="upload-label">
          <span class="upload-caption">{{
            hasImage ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
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
              :placeholder="user.data.username"
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
              placeholder="Enter email"
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
              placeholder="Enter something..."
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

export default {
  data() {
    return {
      image: null,
      hasImage: false,
      show: true,
      form: {
        username: '',
        subname: '',
        email: '',
        bio: '',
      },
    };
  },
  methods: {
    setImage(output) {
      this.hasImage = true;
      this.image = output;
      console.log('Info', output.dataUrl);
      console.log('Exif', output.exif);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      alert(JSON.stringify(this.image));
    },
  },
  computed: {
    ...mapState('auth', ['user']),
  },
};
</script>
