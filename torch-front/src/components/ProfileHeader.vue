<template>
  <div class="container">
    <b-row id="user-head-info">
      <b-col align-self="center" cols="8 px-1">
        <b-row align-v="center" class="text-sm">
          <b-col class="">
            <router-link :to="{path: `/${user.username}/routines`}" tag="div">
              <p class="my-0 fw-bold text-center"> {{user.routines.length}}
                <span v-if="!mobile" class="text-secondary fw-md"> routines</span>
              </p>
              <p v-if="mobile" class="my-0 text-secondary  text-center">routines</p>
            </router-link>
          </b-col>
          <b-col class="">
            <router-link :to="{path: `/${user.username}/followers`}" tag="div">
              <p class="my-0 text-center fw-bold"> {{ user.followers.length }}
                <span v-if="!mobile" class="text-secondary fw-md"> followers  </span>
              </p>
              <p v-if="mobile" class="my-0 text-center text-secondary">followers</p>
            </router-link>
          </b-col>
          <b-col class="">
            <router-link :to="{path: `/${user.username}/following`}" tag="div">
              <p class="my-0 text-center fw-bold">{{ user.following.length }}
                <span v-if="!mobile" class="text-secondary fw-md"> following </span>
              </p>
              <p v-if="mobile" class="my-0 text-center text-secondary">following</p>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        cols="4"
        class="text-end px-1">
        <b-img
          v-if="mobile"
          fluid
          id="picture"
          rounded="circle"
          class="img-sm-limit center-cropped"
          alt="profile picture"
          :src="imageUrlUpdate"
          @error="imageError = true"
        />
        <b-img
          v-else
          id="picture"
          :src="imageUrlUpdate"
          @error="imageError = true"
          rounded="circle"
          class="img-limit center-cropped"
          alt="profile picture"
        />
      </b-col>
    </b-row>
    <b-row id="user-text-info">
      <b-col cols="8">{{user.bio}}</b-col>
      <b-col cols="4" class="text-end">
        <p class="pt-2 my-0 fw-bold text-capitalize">{{user.username}}</p>
        <p class="py-0 my-0 fw-light">{{user.subname}}</p>
      </b-col>
    </b-row>
    <!-- user profile buttons -->
    <b-row order-md="3" id="buttons" class="py-3" v-if="isPersonal">
      <b-container v-if="mobile" fluid="xl" class="px-2">
        <b-button
          :to="{path: `/${user.username}/edit-profile` }"
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
          :to="{path: `/${user.username}/edit-profile` }"
          id="edit"
          size="lg"
          class="my-2 me-2 px-4">edit profile</b-button>
        <b-button
          id="stats"
          size="lg"
          class="my-2 px-5">stats</b-button>
      </b-container>
    </b-row>
    <b-row order-md="3" id="buttons" class="py-3" v-if="!isPersonal">
      <b-container v-if="mobile" fluid="xl" class="px-2">
        <b-button
          id="stats"
          :variant=" followed && !aux ? 'outline-secondary' : 'primary'"
          size="sm"
          @click="handleFollow"
          class="my-2 px-5">{{followed && !aux  ? 'unfollow': 'follow' }}</b-button>
      </b-container>
      <b-container v-if="!mobile" fluid="xl"
        class="px-5 text-start">
        <b-button
          id="stats"
          :variant="followed && !aux ? 'outline-secondary' : 'primary' "
          size="lg"
          @click="handleFollow"
          class="my-2 px-5">{{followed && !aux ? 'unfollow' : 'follow'}}</b-button>
      </b-container>
    </b-row>
  </div>
</template>

<script>
const defaultImg = require('@/assets/images/torch-logo-black.png');

export default {
  name: 'ProfileHeader',
  props: ['user', 'authUser', 'mobile'],
  data() {
    return {
      aux: false,
      imageError: false,
      defaultImage: defaultImg,
    };
  },
  created() {
    this.user.followers = [];
    this.user.following = [];
  },
  mounted() {
    if (this.user.followers !== undefined) {
      this.aux = this.user.followers
        .map((el) => el === this.authUser.data.username)
        .length > 0;
    }
  },
  computed: {
    followed() {
      if (this.user.followers !== undefined) {
        return this.user.followers
          .map((el) => el === this.authUser.data.username)
          .length > 0;
      }
      return null;
    },
    imageUrlUpdate() {
      if (this.user.image === undefined) {
        return this.defaultImage;
      }
      return this.user.image.dataUrl;
    },
    isPersonal() {
      return this.user._id === this.authUser.data._id; // eslint-disable-line
    },
  },
  methods: {
    handleFollow() {
      const namesObj = {
        current: this.authUser.data.username,
        toFollow: this.$route.params.name,
      };
      this.$store.dispatch('user/toggleFollow', namesObj).then(
        (error) => {
          this.loading = false;
          this.message = (error.response && error.response.data)
            || error.message
            || error.toString();
        },
      );
      this.aux = !this.aux;
    },
  },
};
</script>

<style scoped>
  .img-sm-limit {
    min-width: 70px;
    min-height: 70px;
    max-width: 80px;
    max-height: 80px;
    overflow: hidden;
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
