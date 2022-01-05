<template>
  <div class="container">
    <b-row id="user-head-info">
      <b-col align-self="center" cols="8 px-1">
        <b-row align-v="center" class="text-sm">
          <b-col class="">
            <p class="my-0 fw-bold text-center">0
              <span v-if="!mobile" class="text-secondary fw-md"> routines</span>
            </p>
            <p v-if="mobile" class="my-0 text-secondary  text-center">routines</p>
          </b-col>
          <b-col class="">
            <p class="my-0 text-center fw-bold">0
              <span v-if="!mobile" class="text-secondary fw-md"> followers</span>
            </p>
            <p v-if="mobile" class="my-0 text-center text-secondary">followers</p>
          </b-col>
          <b-col class="">
            <p class="my-0 text-center fw-bold">0
              <span v-if="!mobile" class="text-secondary fw-md"> following</span>
            </p>
            <p v-if="mobile" class="my-0 text-center text-secondary">following</p>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        cols="4"
        class="text-end px-1">
        <b-img
          v-if="mobile"
          id="picture"
          src="https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          rounded="circle"
          class="img-sm-limit center-cropped"
          alt="profile picture"
        ></b-img>
        <b-img
          v-else
          id="picture"
          src="https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          rounded="circle"
          class="img-limit center-cropped"
          alt="profile picture"
        ></b-img>
      </b-col>
    </b-row>
    <b-row id="user-text-info">
      <b-col cols="8">Bio</b-col>
      <b-col cols="4" class="text-end">
        <p class="pt-2 my-0 fw-bold text-capitalize">{{user.data.username}}</p>
        <p class="py-0 my-0 fw-light">Pusher</p>
      </b-col>
    </b-row>
    <!-- user profile buttons -->
    <b-row order-md="3" id="buttons" class="py-3">
      <b-container v-if="mobile" fluid="xl" class="px-2">
        <b-button
          :to="{path: `/${user.data.username}/edit-profile` }"
          id="edit"
          size="sm"
          class="my-2 me-2 px-4">edit profile</b-button>
        <b-button
          id="stats"
          size="sm"
          class="my-2 px-5">stats</b-button>
      </b-container>
      <b-container v-if="!mobile" fluid="xl"
        class="px-5 text-start">
        <b-button
          :to="{path: `/${user.data.username}/edit-profile` }"
          id="edit"
          size="lg"
          class="my-2 me-2 px-4">edit profile</b-button>
        <b-button
          id="stats"
          size="lg"
          class="my-2 px-5">stats</b-button>
      </b-container>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: ['user', 'mobile'],
};
</script>

<style scoped>
  .img-sm-limit {
    min-width: 70px;
    min-height: 70px;
    max-width: 80px;
    max-height: 80px;
  }
  .img-limit {
    max-width: 250px;
    max-height: 250px;
  }
  @media screen and (min-width: 601px) {
    p {
        font-size: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    p {
        font-size: 11px;
    }
  }
</style>
