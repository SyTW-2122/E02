<template>
    <b-row class="p-3">
      <b-form @submit="newRoutine"
        class="text-center">
        <b-row
          align-v="stretch">
          <b-col
            cols=12
            md="6">
            <b-form-group
              id="new-routine-form"
              class="p-3 text-start">
              <label
                class="fs-6"
                for="routine-name mb-1">Routine name</label>
              <b-form-input
                id="routine-name"
                class="my-3"
                type="text"
                v-model="routine.name"
                required>
              </b-form-input>
              <label
                class="fs-6"
                for="routine-description">Description</label>
              <b-form-textarea
                  id="routine-description"
                  v-model="routine.description"
                  rows="3"
                  required
                  max-rows="6"
                ></b-form-textarea>
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            md="6">
            <b-row class="m-3 p-0">
              <b-col
                fluid
                class="bg-gray p-0 my-2"
                cols=12>
                <b-img
                  v-if="hasImage"
                  id="picture"
                  :src="routine.image.dataUrl"
                  fluid
                  rounded
                  alt="profile picture"
                ></b-img>
              </b-col>
              <b-col>
                <b-button variant="secondary" class="text-white px-4" pill>
                  <label for="fileInput" slot="upload-label">
                    <image-uploader
                    class="file-upload p-0 m-0"
                      :show="false"
                      v-model="routine.image"
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
                          hasImage ? "Replace" : "Add routine image"
                        }}</span>
                  </label>
                </b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols=12>
            <b-button
              align-self="center"
              pill
              type="submit"
              variant="info"
              class="py-3 px-5 text-white btn-md">
                Create new routine
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-row>
</template>

<script>
export default {
  props: ['user', 'authUser', 'mobile'],
  data() {
    return {
      hasImage: false,
      successful: false,
      routine: {
        name: '',
        description: '',
        image: {},
      },
    };
  },
  computed: {
  },
  methods: {
    setImage(output) {
      this.hasImage = true;
      this.routine.image = output;
    },
    async newRoutine(event) {
      event.preventDefault();
      const routineInfo = {
        username: this.user.username,
        routine: this.routine,
      };
      await this.$store.dispatch('routine/add', routineInfo).then(
        async (data) => {
          this.msg = data.msg;
          this.successful = true;
          this.routine.name = '';
          this.routine.description = '';
          this.routine.image = {};
          this.hasImage = false;
          await this.$bvToast.toast(`New routine: ${this.routine.name}, was created`, {
            title: 'New routine!',
            autoHideDelay: 30000,
            appendToast: true,
          });
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
};
</script>

<style scoped>
</style>
