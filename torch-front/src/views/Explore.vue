<template>
  <div>
    <div class="container" id="Explorer">
      <b-row class="search-bar">
        <b-col class="col-2 col-md-1">
          <font-awesome-icon id ="search-icon" icon="search" class="fa-2x mt-2"/>
        </b-col>
        <b-col class="col-10 col-md-11">
          <b-form-input id="search-text" v-model="search" placeholder="Search"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="Cards pt-1 mb-5 pb-5 text-center">
        <b-col class="col-12 mb-2 col-md-6 col-lg-4">
          <RoutineCard />
        </b-col>
        <b-col class="col-12 mb-2 col-md-6 col-lg-4">
          <UserCard />
        </b-col>
        <b-col class="col-12 mb-2 col-md-6 col-lg-4">
          <UserCard />
        </b-col>
        <b-col class="col-12 mb-2 col-md-6 col-lg-4">
          <RoutineCard/>
        </b-col>
        <b-col class="col-12 mb-2 col-md-6 col-lg-4">
          <RoutineCard/>
        </b-col>
        <b-col class="col-12 mb-2 col-md-6 col-lg-4">
          <UserCard/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

import RoutineCard from '@/components/RoutineCard.vue';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'Explore',
  components: {
    RoutineCard,
    UserCard,
  },
  data() {
    return {
      users: [],
      routines: [],
      urlRoutine: {},
      urlUser: {},
    };
  },
  created() {
    this.$store.dispatch('user/getByUsername', this.$route.params.name).then(
      (data) => {
        this.urlUser = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );

    this.$store.dispatch('user/getBySportName', this.$route.params.name).then(
      (data) => {
        this.urlRoutine = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );

    this.getUsers();
    this.getRoutines();
  },
  methods: {
    fetchUser(username) {
      this.$store.dispatch('user/getByUsername', username).then(
        (data) => {
          this.urlUser = data;
        },
        (error) => {
          console.log(`failed: ${error}`);
        },
      );
    },
    fetchRoutine(sportName) {
      this.$store.dispatch('routine/getBySportName', sportName).then(
        (data) => {
          this.urlRoutine = data;
        },
        (error) => {
          console.log(`failed: ${error}`);
        },
      );
    },
    getUsers() {
      const res = this.get(`${this.urlUser}/users`);
      this.users = res.data.users;
    },
    getRoutines() {
      const res = this.get(`${this.urlRoutine}/routines`);
      this.routines = res.data.routines;
    },
  },
};
</script>

<style scoped>
.search-bar {
  padding: 40px 35px;
}

#search-text {
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
</style>
