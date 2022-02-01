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
          v-for="user in randomUsers" :key="user.id">
          <b-row>
            <b-col class="col-12">
              <b-card>
                <b-img
                  fluid
                  rounded="circle"
                  class="img-sm-limit center-cropped"
                  :src="user.image.dataUrl"/>
                <b-card-text>
                  <p class="pt-2"><strong>{{user.username}}</strong></p>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Explore',
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
