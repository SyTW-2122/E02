<template>
  <b-container fluid class="m-0 p-0">
    <div class="container" id="User">
      <b-row id="settings-button" >
        <b-col
        sm="2" class="pt-3 ps-4 text-start"
        v-if="urlUser._id !== authUser.data._id" >
          <router-link tag="div" :to="{ path: `${prevRoute.path}` }">
            <font-awesome-icon
              icon="chevron-left" id="settings"  class="fa-2x"/>
          </router-link>
        </b-col>
        <b-col sm="12" class="py-3 ps-4 text-end" >
            <font-awesome-icon
            v-if="urlUser._id === authUser.data._id"
            v-b-toggle.sidebar-1 icon="bars" id="settings"  class="fa-2x"/>
            <font-awesome-icon
            v-if="urlUser._id !== authUser.data._id"
            v-b-toggle.sidebar-2 icon="ellipsis-h" id="options"
            class="fa-2x"/>
        </b-col>
      </b-row>
      <b-row id="options-button" v-if="this.urlUser.username !== this.authUser.data.username">
        <b-col sm="12" class="py-3" >
        </b-col>
      </b-row>
      <ProfileHeader
        id="profile-header"
        v-if="user" :user="urlUser" :authUser="authUser" :mobile="mobile" />
      <ProfileTools
        v-if="user" :user="urlUser" :authUser="authUser" :mobile="mobile"/>
    </div>
    <b-container id="fill" v-if="mobile"></b-container>
    <b-sidebar
      id="sidebar-1"
      aria-label="Sidebar with custom footer"
      no-header
      backdrop
      shadow>
      <template #footer="{ hide }">
        <b-row class="text-center">
          <b-col cols="12" class="">
            <b-button
            @click.prevent="logOut"
            size="mg"
            class="px-5"
            block
            variant="outline-danger">
              log out
              <span>
                <font-awesome-icon
                icon="power-off"
                id="settings"
                class="fa-lg mx-2"/>
              </span>
            </b-button>
          </b-col>
          <b-col>
            <b-button
              class="mt-4 mb-3 py-1"
              size="lg" @click="hide">Close
            </b-button>
          </b-col>
        </b-row>
      </template>
      <div class="px-3 py-2">
      </div>
    </b-sidebar>
    <b-sidebar
      id="sidebar-2"
      aria-label="Sidebar with custom footer"
      no-header
      backdrop
      shadow>
      <template #footer="{ hide }">
        <b-row class="text-center">
          <b-col cols="12" class="">
            <b-button
            @click.prevent=""
            size="mg"
            class="px-5"
            block
            variant="outline-secondary">
              report {{ urlUser.username }}
            </b-button>
          </b-col>
          <b-col>
            <b-button
              class="mt-4 mb-3 py-1"
              size="lg" @click="hide">Close
            </b-button>
          </b-col>
        </b-row>
      </template>
      <div class="px-3 py-2">
      </div>
    </b-sidebar>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

import ProfileHeader from '@/components/ProfileHeader.vue';
import ProfileTools from '@/components/ProfileTools.vue';

export default {
  name: 'User',
  data() {
    return {
      prevRoute: '',
      urlUser: {},
      authUser: {},
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchUser(to.params.name);
    next();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      /* eslint-disable */
      vm.prevRoute = from;
    });
  },
  components: {
    ProfileHeader,
    ProfileTools,
  },
  props: ['mobile', 'name'],
  computed: {
    ...mapState('auth', ['user']),
  },
  created() {
    this.authUser = this.user;
    this.$store.dispatch('user/getByUsername', this.$route.params.name).then(
      (data) => {
        this.urlUser = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
  mounted() {
    if (!this.authUser) {
      this.$router.push('/');
    }
    this.fetchUser(this.$route.params.name);
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
    fetchUser(username) {
      this.$store.dispatch('user/getByUsername', username).then(
        (data) => {
          this.urlUser = data;
        },
        (error) => {
          console.log(`failed: ${error}`);
          this.$router.push('/');
        },
      );
    },
  },
};
</script>

<style>
  #fill {
    height: 6em;
  }
</style>
