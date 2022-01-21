<template>
  <div>
    <b-row class="mt-2"
    v-for="(notification, index) in user.newNotifications" :key="index">
      <b-col>
        <b-card :bg-variant="bgColor(notification.viewed)" text-variant="white" >
          <b-card-text class="text-center">
            <span class="me-5 pe-5">{{notification.text}}</span>
            <span class="ms-5 ps-5">
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
