<template>
  <div>
    <b-container v-if="user.newNotifications.length === 0">
      <h2 class="text-secondary text-center border-bottom p-4">
        no reccent activity for {{user.username}}
      </h2>
    </b-container>
    <b-row class="mt-2"
    v-for="(notification, index) in user.newNotifications" :key="index">
      <b-col>
        <b-card :bg-variant="bgColor(notification.viewed)" text-variant="white" >
          <b-card-text class="text-center">
            <span class="text-center text-md-start me-md-5 pe-md-5">{{notification.text}}</span>
            <span class="text-center text-md-end ms-md-5 ps-md-5">
              <b-button variant="primary" @click="view(notification.if)">
                <font-awesome-icon icon="trash" class="fa-1x "/>
              </b-button>
            </span>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['user', 'authUser', 'mobile'],
  computed: {
  },
  methods: {
    bgColor(viewed) {
      return viewed ? 'secondary' : 'primary';
    },
    view(id) {
      const namesObj = {
        username: this.authUser.data.username,
        id,
      };
      this.$store.dispatch('user/viewNotification', namesObj).then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(`failed: ${error}`);
        },
      );
    },
  },
};
</script>

<style scoped>
</style>
