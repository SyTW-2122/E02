<template>
  <div class="container" id="User">
    <b-row id="settings-button">
      <b-col sm="12" class="py-3" >
          <font-awesome-icon  v-b-toggle.sidebar-1 icon="bars" id="settings"  class="fa-2x"/>
      </b-col>
      <b-sidebar id="sidebar-1" title="Settings" shadow>
        <b-row
          class="px-3 py-2"
          align-content="center">
            <b-button
            @click.prevent="logOut"
            variant="outline-danger">
              log out
              <span>
                <font-awesome-icon icon="power-off" id="settings"  class="fa-lg"/>
              </span>
            </b-button>
        </b-row>
      </b-sidebar>
    </b-row>
    <ProfileHeader :user="user" :mobile="mobile" />
    <ProfileTools />
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
  props: ['mobile'],
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

<style scoped>
  .flex-sidebar {
      display: flex;
      align-items: stretch;
  }
  .img-limit {
    max-width: 400px;
  }
</style>
