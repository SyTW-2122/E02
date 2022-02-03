<template>
  <b-container
    class="my-4 p-2">
    <b-row class="ms-5">
      <router-link tag="div" :to="{ path: `/${urlUser.username}` }">
        <font-awesome-icon
        icon="chevron-left" id="settings"  class="fa-2x"/>
        </router-link>
    </b-row>
    <h1 class="text-center my-3">routines</h1>
    <b-row
      v-if="routines.length === 0"
      class="border-bottom border-top m-1 text-center">
      <h3 class="text-secondary">No routines created yet</h3>
    </b-row>
    <b-row
      v-else
      class="bg-light py-2 mt-3 shadow rounded"
      align-h="center" v-for="(routine, index) in routines" :key="index">
        <b-col
        cols=6
        class="text-start" >
          <h3>{{routine.name}}</h3>
          <p class="hideOverflow">{{routine.description}}</p>
        </b-col>
        <b-col
        v-if="!routine.image"
        cols=4
        class="bg-gray rounded " >
        </b-col>
        <b-col
        v-else
        cols=4
        class=" rounded p-0 m-0" >
          <b-img
            rounded
            :src="routine.image.dataUrl" fluid alt="routine image"></b-img>
        </b-col>
        <b-col
        v-if="authUser.data._id === user._id"
        cols=12
        class="p-3 mx-5 text-end" >
          <b-button
            class="mx-4 "
            variant="primary"
            @click="showModal(routine)">
            <font-awesome-icon icon="edit" class="fa-1x mx-2"/>
          </b-button>
          <b-button variant="danger" @click="del(routine._id)">
            <font-awesome-icon icon="trash" class="fa-1x "/>
          </b-button>
        </b-col>
    </b-row>
    <b-modal
      ref="my-modal"
      hide-header
      hide-footer
      title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Edditing {{routineToEdit.name}}</h3>
      </div>
      <b-form @submit="editRoutine"
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
                v-model="routineToEdit.name"
                required>
              </b-form-input>
              <label
                class="fs-6"
                for="routine-description">Description</label>
              <b-form-textarea
                  id="routine-description"
                  v-model="routineToEdit.description"
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
                  v-if="routineToEdit.image.dataUrl"
                  id="picture"
                  :src="routineToEdit.image.dataUrl"
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
                      v-model="routineToEdit.image"
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
                          routineToEdit.image ? "Replace" : "Add routine image"
                        }}</span>
                  </label>
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-form>
      <b-button
        class="mt-3"
        variant="outline-danger"
        block @click="hideModal">Close</b-button>
      <b-button
        class="mt-3 ms-4"
        variant="outline-primary"
        block @click="editRoutine">Edit</b-button>
    </b-modal>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['authUser', 'mobile'],
  data() {
    return {
      urlUser: {},
      routinesList: [],
      routineToEdit: {
        name: '',
        ratings: [],
        comments: [],
        image: {},
        description: '',
        likes: [],
        exercises: [],
      },
    };
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('routine', ['routines']),
  },
  async created() {
    await this.$store.dispatch('routine/getAll', this.$route.params.name).then( // eslint-disable-line
      async (data) => {
        // no se usa ya, está en la store, permanece como objeto de pruebas
        this.routinesList = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
  methods: {
    setImage(output) {
      this.routine.image = output;
    },
    async del(id) {
      const params = {
        routineID: id,
        user: this.user.username,
      };
      this.$store.dispatch('routine/delete', params)
        .then(
          await this.$store.dispatch('routine/getAll', this.user.username).then( // eslint-disable-line
            (data) => {
              this.routinesList = data;
            },
            (error) => {
              console.log(`failed: ${error}`);
            },
          ),
        );
    },
    showModal(routine) {
      this.routineToEdit = routine;
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },
    async editRoutine() {
      const params = {
        username: this.user.username,
        routine: this.routineToEdit,
      };
      await this.$store.dispatch('routine/edit', params)
        .then(
          await this.$store.dispatch('routine/getAll', this.user.username).then( // eslint-disable-line
            (data) => {
              this.routinesList = data;
            },
            (error) => {
              console.log(`failed: ${error}`);
            },
          ),
        );
    },
  },
};
</script>

<style scoped>
.hideOverflow
{
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  width:100%;
  display:block;
}
</style>
