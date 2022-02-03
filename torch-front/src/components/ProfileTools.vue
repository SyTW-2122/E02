<template>
  <b-container id="tools-tab" class="px-0">
      <b-tabs content-class="mt-3" justified>
        <b-tab>
          <template #title>
            <font-awesome-icon
            v-if="isPersonal"
            icon="history"
            class="fa-2x my-3"/>
            <font-awesome-icon v-else icon="stream" class="fa-2x"/>
          </template>
          <p>I'm the history tab</p>
        </b-tab>
        <b-tab>
          <template #title>
            <font-awesome-icon
            v-if="isPersonal" icon="plus-square"
            class="fa-2x my-3"/>
            <font-awesome-icon v-else icon="newspaper" class="fa-2x"/>
          </template>
          <p>I'm the creator tab</p>
        </b-tab>
        <b-tab>
          <template #title>
            <div
              v-if="isPersonal && (user.newNotifications.length > 0)"
              class="fa-stack fa-2x mt-1"
              :data-count="user.newNotifications.length">
              <font-awesome-icon icon="bell"/>
            </div>
            <div
              v-else-if="isPersonal && (user.newNotifications.length === 0)"
              class="fa-stack fa-2x">
              <font-awesome-icon  icon="bell"/>
            </div>
            <font-awesome-icon v-else icon="star-half-alt" class="fa-2x"/>
          </template>
          <NotificationsTab v-if="isPersonal"
            :user="user"
            :authUser="authUser"
            :mobile="mobile"/>
        </b-tab>
      </b-tabs>
    </b-container>
</template>

<script>
import NotificationsTab from '@/components/NotificationsTab.vue';

export default {
  name: 'ProfileTools',
  props: ['user', 'authUser', 'mobile'],
  components: {
    NotificationsTab,
  },
  computed: {
    isPersonal() {
      return this.user._id === this.authUser.data._id; // eslint-disable-line
    },
  },
};
</script>

<style scoped>
.fa-stack[data-count]:after {
  position: absolute;
  right: 25%;
  top: 5%;
  content: attr(data-count);
  font-size: 33%;
  padding: .6em;
  border-radius: 999px;
  line-height: .75em;
  color: white;
  background: rgba(255, 0, 0, 1);
  text-align: center;
  min-width: 2em;
  font-weight: bold;
}
</style>
