<template>
  <b-row id="tools-tab" class="p-0 m-0">
      <b-tabs
        v-model="tabIndex"
        content-class="mt-2 p-0 b-tabs"
        justified
        active-nav-item-class="font-weight-bold"
        nav-item-class=""
        active-tab-class="font-weight-bold ">
        <b-tab :title-link-class="linkClass(0)">
          <template #title>
            <font-awesome-icon
            v-if="isPersonal"
            icon="history"
            class="fa-2x my-3"/>
            <font-awesome-icon v-else icon="stream" class="fa-2x"/>
          </template>
          <b-container>
          <HistoryTab
            v-if="isPersonal"
            :user="user"
            :authUser="authUser"
            :mobile="mobile"/>
          <RoutinesListTab
            v-else
            :user="user"
            :authUser="authUser"
            :mobile="mobile"/>
          </b-container>
        </b-tab>
        <b-tab :title-link-class="linkClass(1)">
          <template #title>
            <font-awesome-icon
            v-if="isPersonal" icon="plus-square"
            class="fa-2x my-3"/>
            <font-awesome-icon v-else icon="newspaper" class="fa-2x"/>
          </template>
          <CreatorTab
            v-if="isPersonal"
            :user="user"
            :authUser="authUser"
            :mobile="mobile"/>
          <!-- <PersonalBlogTip v-else
            :user="user"
            :authUser="authUser"
            :mobile="mobile"/> -->
        </b-tab>
        <b-tab :title-link-class="linkClass(2)">
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
    </b-row>
</template>

<script>
import HistoryTab from '@/components/HistoryTab.vue';
import RoutinesListTab from '@/components/RoutinesListTab.vue';
import CreatorTab from '@/components/CreatorTab.vue';
import NotificationsTab from '@/components/NotificationsTab.vue';
// import PersonalBlogTip from '@/components/PersonalBlogTip.vue';

export default {
  name: 'ProfileTools',
  props: ['user', 'authUser', 'mobile'],
  data() {
    return {
      tabIndex: 0,
    };
  },
  components: {
    HistoryTab,
    RoutinesListTab,
    CreatorTab,
    NotificationsTab,
    // PersonalBlogTip,
  },
  computed: {
    isPersonal() {
      return this.user._id === this.authUser.data._id; // eslint-disable-line
    },
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-white', 'text-info'];
      }
      return ['bg-light', 'text-secondary'];
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
