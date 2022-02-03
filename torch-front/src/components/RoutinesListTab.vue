<template>
  <b-container
    class="my-4 p-0">
    <b-row class="text-center">
      <h1 class="text-center my-3">{{user.username}}'s routines</h1>
    </b-row>
    <b-row
      v-if="routines.length === 0"
      class="border-bottom border-top m-1 text-center">
      <h3 class="text-secondary">No routines created yet</h3>
    </b-row>
    <b-row
      v-else
      class="bg-light py-2 mt-3  px-2 shadow rounded"
      align-h="center" v-for="(routine, index) in routines" :key="index">
        <b-col
        cols=5
        class="text-start" >
          <h3>{{routine.name}}</h3>
          <p>{{routine.description}}</p>
        </b-col>
        <b-col
        v-if="!routine.image"
        cols=7
        class="bg-gray rounded " >
        </b-col>
        <b-col
        v-else
        cols=7
        class="rounded p-0 m-0" >
          <b-img
            rounded
            :src="routine.image.dataUrl" fluid alt="routine image"></b-img>
        </b-col>
        <b-col cols="7" class="my-2">
          <h4>Comments</h4>
        </b-col>
        <b-col cols="5" class="my-2">
          <h5 class="text-end">Likes <span>{{routine.likes.length}}</span></h5>
        </b-col>
        <b-col cols="12" class="text-end">
          (rating component)
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
  created() {
    this.bringRoutines();
  },
  methods: {
    bringRoutines() {
      this.$store.dispatch('routine/getAll', this.user.username).then( // eslint-disable-line
        async (data) => {
          this.routinesList = data;
        },
        (error) => {
          console.log(`failed: ${error}`);
        },
      );
    },
  },
};
</script>
