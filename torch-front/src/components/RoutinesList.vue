<template>
  <b-container
    class="my-4 p-2">
    <b-row class="ms-5">
      <router-link tag="div" :to="{ path: `/${urlUser.username}` }">
        <font-awesome-icon
        icon="chevron-left" id="settings"  class="fa-2x"/>
        </router-link>
    </b-row>
    <h1 class="text-center">{{user.data.username}}'s routines</h1>
    <b-row
      class="bg-light py-2 mt-3 shadow rounded"
      align-h="center" v-for="(routine, index) in routinesList" :key="index">
        <b-col
        cols=8
        class="text-start" >
          <h3>{{routine.name}}</h3>
          <p>{{routine.description}}</p>
        </b-col>
        <b-col
        v-if="!routine.image"
        cols=4
        class="bg-gray rounded " >
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      urlUser: {},
      routinesList: [],
    };
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('routine', ['routines']),
  },
  async created() {
    await this.$store.dispatch('routine/getAll', this.$route.params.name).then( // eslint-disable-line
      async (data) => {
        this.routinesList = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
};
</script>
