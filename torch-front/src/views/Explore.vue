<template>
  <div>
    <div class="container" id="Explorer">
      <b-row class="search-bar">
        <b-col cols="2">
          <font-awesome-icon icon="search" class="fa-2x"/>
        </b-col>
        <b-col cols="10">
          <b-form-input id="input-default" placeholder="Search"></b-form-input>
        </b-col>
      </b-row>
      <div class="mb-5 pb-5 text-center">
        <b-row class="Cards pt-1">
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
            <RoutineCard />
          </b-col>
          <b-col class="col-12 mb-2 col-md-6 col-lg-4">
            <RoutineCard />
          </b-col>
          <b-col class="col-12 mb-2 col-md-6 col-lg-4">
            <UserCard />
          </b-col>
        </b-row>
      </div>
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
};
</script>

<style scoped>
.search-bar {
  padding: 40px 35px;
}
</style>
