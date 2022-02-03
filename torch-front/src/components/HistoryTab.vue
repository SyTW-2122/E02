<template>
  <b-container
    class="my-4 p-0">
    <b-row class="text-center">
      <h1 class="text-center my-3">your history</h1>
    </b-row>
    <b-row
      v-if="routines.length === 0"
      class="border-bottom border-top m-1 text-center">
      <h3 class="text-secondary">No routines practiced yet</h3>
    </b-row>
    <b-row
      v-else
      class=" py-2 mt-3 "
      align-h="start" v-for="(element, index) in history" :key="index">
        <b-col cols=12>
          <b-row
            class="bg-light shadow rounded px-0">
            <b-col
              cols=3
              class="text-start bg-gray rounded ms-2 my-2 " >
            </b-col>
            <b-col
              cols=5
              class="text-start mt-2" >
                <p class="fs-md-3">{{element.routine.name}} - {{element.routine.time}}</p>
                <p class="fs-md-4">{{element.routine.author}} </p>
            </b-col>
            <b-col
            cols=3
            class="text-end p-4 ms-4" >
              <img
                v-if="element.completed"
                src="../assets/images/Group 23.png" class="img-fluid" alt="status"/>          <img
                v-if="!element.completed"
                src="../assets/images/Group 24.png" class="img-fluid" alt="status"/>
            </b-col>
          </b-row>
          <b-row class="mt-2 text-secondary">
            <b-col cols=12 class="text-end">
              {{element.date}}
            </b-col>
          </b-row>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      imageUrl: '../assets/images/google.png',
      history: [
        {
          routine: {
            name: 'Pump routine',
            time: '40min',
            author: 'Ale',
          },
          completed: true,
          date: '10:30 11/10/2021',
        },
        {
          routine: {
            name: 'Begginers stretch',
            time: '15min',
            author: 'Miguee',
          },
          completed: false,
          date: '21:05 10/10/2021',
        },
        {
          routine: {
            name: 'Pump enhance',
            time: '1hour',
            author: 'Vadim',
          },
          completed: true,
          date: '21:05 10/10/2021',
        },
        {
          routine: {
            name: 'Soft cardio',
            time: '5min',
            author: 'Eric',
          },
          completed: true,
          date: '21:05 10/10/2021',
        },
      ],
    };
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('routine', ['routines']),
  },
};
</script>
