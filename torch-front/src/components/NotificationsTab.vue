<template>
  <div>
    <b-row
    v-for="(notification, index) in user.newNotifications" :key="index">
      <b-col v-on:click="view(notification.id)">
        <b-card :bg-variant="bgColor(notification.viewed)" text-variant="white" >
          <b-card-text>{{notification.text}}</b-card-text>
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
      return viewed ? 'primary' : 'secondary';
    },
    view(id) {
      console.log(this.user.newNotifications
        .find((el) => el.id === '1') === undefined);
      const namesObj = {
        username: this.authUser.data.username,
        id,
      };
      this.$store.dispatch('user/viewNotification', namesObj).then(
        (error) => {
          console.log(`failed: ${error}`);
        },
      );
    },
  },
};
</script>
