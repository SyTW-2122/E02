<template>
   <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card
          title= {{arg.sportname}}
          img :src="arg.imgURL"
          img-alt="Image"
          img-top
          style="max-width: 20rem;"
          class="mb-2">
      </b-col>
      <b-col md="6">
      <b-card-text>
        {{arg.description}}
      </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'RoutineCard',
  props: {
    arg: {
      sportname: String,
      imgURL: String,
      description: String,
    },
  },
};
</script>

<style scoped>

</style>
