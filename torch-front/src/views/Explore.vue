<template>
  <div>
    <div class="container" id="Explorer">
      <b-row class="search-bar">
        <b-col class="col-2 col-md-1">
          <font-awesome-icon id ="search-icon" icon="search" class="fa-2x mt-2"/>
        </b-col>
        <b-col class="col-10 col-md-11">
          <b-form-input id="search-text" placeholder="Search"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="Cards pt-1 mb-5 pb-5 text-center">
        <b-col class="col-12 mb-2 col-md-6 col-lg-4"
          :key="user.username" v-for="user in randomUsers">
          <UserCard user/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';

import { mapActions } from 'vuex';

export default {
  name: 'Explore',
  components: {
    UserCard,
  },
  props: {
    randomUsers: [],
  },
  methods: {
    ...mapActions('user', ['getAll']),
  },
  async created() {
    const response = await this.getAll();
    let UsersAmount = 3;
    if (response.length < 3) {
      UsersAmount = response.length;
    }
    const randomUsersArray = [];
    while (randomUsersArray.length !== UsersAmount) {
      const num = Math.floor(Math.random() * response.length);
      if (!randomUsersArray.includes(num)) {
        randomUsersArray.push(num);
      }
    }
    const save = [];
    randomUsersArray.forEach((element) => {
      save.push(response[element]);
    });
    this.randomUsers = save;
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
