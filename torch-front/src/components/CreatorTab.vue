<template>
  <div>
    <b-row class="p-3">
      <b-form @submit="newRoutine"
        class="text-center">
        <b-form-group
          id="new-routine-form"
          class="p-3 text-start">
          <label
            class="fs-3"
            for="routine-name mb-1">Routine name</label>
          <b-form-input
            id="routine-name"
            class="my-3"
            type="text"
            v-model="routine.name"
            required>
          </b-form-input>
          <label
            class="fs-3"
            for="routine-name mb-1">Description</label>
          <b-form-input
            id="routine-description"
            type="block"
            v-model="routine.name"
            required>
          </b-form-input>
        </b-form-group>
        <b-button
          align-self="center"
          pill
          type="submit"
          variant="info"
          class="py-3 px-5 text-white btn-md">
            Create new routine
        </b-button>
      </b-form>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['user', 'authUser', 'mobile'],
  data() {
    return {
      routine: {
        name: '',
        description: '',
        image: {},
      },
    };
  },
  computed: {
  },
  methods: {
    newRoutine(event) {
      event.preventDefault();
    },
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
