<template>
  <div>
    <div class="container px-2" id="User">
      <b-row id="settings-button">
        <b-col sm="12" class="py-3" >
            <font-awesome-icon  v-b-toggle.sidebar-1 icon="bars" id="settings"  class="fa-2x"/>
        </b-col>
      </b-row>
      <ProfileHeader :user="user" :mobile="mobile" />
      <ProfileTools />
    </div>
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
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import ProfileHeader from '@/components/ProfileHeader.vue';
import ProfileTools from '@/components/ProfileTools.vue';

export default {
  name: 'User',
  components: {
    ProfileHeader,
    ProfileTools,
  },
  props: ['mobile', 'name'],
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['getUserName']),
  },
  mounted() {
    console.log(this.isMobile);
    if (!this.user) {
      this.$router.push('/sign-in');
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/sign-in');
    },
  },
};
</script>
