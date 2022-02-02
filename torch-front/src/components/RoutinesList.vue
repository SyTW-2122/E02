<template>
  <b-container
    class="my-4 p-2">
    <b-row class="ms-5">
      <router-link tag="div" :to="{ path: `/${urlUser.username}` }">
        <font-awesome-icon
        icon="chevron-left" id="settings"  class="fa-2x"/>
        </router-link>
    </b-row>
    <h1 class="text-center my-3">{{user.username}}'s routines</h1>
    <b-row
      v-if="routinesList.length === 0"
      class="border-bottom border-top m-1 text-center">
      <h3 class="text-secondary">No routines created yet</h3>
    </b-row>
    <b-row
      v-else
      class="bg-light py-2 mt-3 shadow rounded"
      align-h="center" v-for="(routine, index) in routinesList" :key="index">
        <b-col
        cols=6
        class="text-start" >
          <h3>{{routine.name}}</h3>
          <p>{{routine.description}}</p>
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
        v-if="authUser.data.id === user.id"
        cols=12
        class="p-3 mx-5 text-end" >
          <b-button variant="danger" @click="del(routine._id)">
            <font-awesome-icon icon="trash" class="fa-1x "/>
          </b-button>
        </b-col>
    </b-row>
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
    };
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('routine', ['routines']),
  },
  async created() {
    await this.$store.dispatch('routine/getAll', this.user.username).then( // eslint-disable-line
      async (data) => {
        this.routinesList = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
  mounted() {
    this.$store.dispatch('routine/getAll', this.user.username).then( // eslint-disable-line
      (data) => {
        this.routinesList = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
  methods: {
    del(id) {
      const params = {
        routineID: id,
        user: this.user.username,
      };
      this.$store.dispatch('routine/delete', params)
        .then(
          this.$store.dispatch('routine/getAll', this.user.username).then( // eslint-disable-line
            async (data) => {
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
