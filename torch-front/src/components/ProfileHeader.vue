<template>
    <b-row id="profile-header" class="pe-2">
      <b-col
      cols="9"
      md="7"
      id="info">
        <b-row id="numbers" v-if="mobile">
          <b-col id="routines"
            class="my-0">
            <b-row id="r-number"
              class="my-0">
              <p class="text-center my-0 fw-bold">0</p>
            </b-row>
            <b-row id="r-title"
              class="my-0">
              <p class="text-center text-secondary">routines</p>
            </b-row>
          </b-col>
          <b-col id="following">
            <b-row id="fng-number"
              class="my-0">
              <p class="text-center my-0 fw-bold">0</p>
            </b-row>
            <b-row id="fng-title"
              class="my-0">
              <p class="text-center text-secondary">following</p>
            </b-row>
          </b-col>
          <b-col id="followers">
            <b-row id="fwr-number"
              class="my-0">
              <p class="text-center my-0 fw-bold">0</p>
            </b-row>
            <b-row id="fwr-title"
              class="my-0">
              <p class="text-center text-secondary">followers</p>
            </b-row>
          </b-col>
        </b-row>
        <b-row id="numbers" v-if="!mobile" >
          <b-col id="routines"
            class="p-3 fs-4">
              <p class="text-center my-0 fw-bold">0 routines</p>
          </b-col>
          <b-col id="following" class="p-3 fs-4">
              <p class="text-center my-0 fw-bold">0 following</p>
          </b-col>
          <b-col id="followers" class="p-3 fs-4">
              <p class="text-center my-0 fw-bold">0 followers</p>
          </b-col>
          <b-col class="fw-bold fs-1 me-4 p-3">
            <p class="text-capitalize text-end">{{ user.data.username }}</p>
            <p class="text-capitalize fs-3 fw-light text-end text-secondary text-wrap">
              Pusher
            </p>
          </b-col>
        </b-row>
        <b-row id="buttons">
          <b-container v-if="mobile" fluid="xl" class="px-2">
            <b-button
              id="edit"
              size="sm"
              class="my-2 me-2 px-4">edit profile</b-button>
            <b-button
              id="stats"
              size="sm"
              class="my-2 px-5">stats</b-button>
          </b-container>
          <b-container v-if="!mobile" fluid="xl"
            class="px-2 text-center">
            <b-button
              id="edit"
              size="lg"
              class="my-2 me-2 px-4">edit profile</b-button>
            <b-button
              id="stats"
              size="lg"
              class="my-2 px-5">stats</b-button>
          </b-container>
        </b-row>
      </b-col>
      <b-col
      cols="3"
      md="5"
      id="profile"
      class="text-wrap">
      <b-img
        id="picture"
        src="https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        fluid-grow
        rounded="circle"
        class="img-limit"
        alt="profile picture"
      ></b-img>
      <p
        v-if="mobile"
        id="username"
        class="
        text-end
        me-2
        text-capitalize
        fs-5
        fw-bold
        my-0">{{ user.data.username}}</p>
      <p
        v-if="mobile"
        id="subname"
        class="
        pe-2
        text-end
        text-capitalize
        text-wrap
        text-secondary
        fs-6
        mt-0
        pt-0">Pusher</p>
      </b-col>
    </b-row>
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: ['user', 'mobile'],
};
</script>
