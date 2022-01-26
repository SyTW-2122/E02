<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img v-if="mobile" fluid
          id="picture"
          class="img-sm-limit center-cropped"
          alt="routine card picture"
          :src="imageUrl"
          @error="imageError = true"></b-card-img>
        <b-card-img v-else
          id="picture"
          :src="imageUrl"
          @error="imageError = true"
          class="img-limit center-cropped"
          alt="routine card picture"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <title>
            {{routine.sportName}}
          </title>
          <b-card-text>
            {{routine.description}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'RoutineCard',
  props: ['routine'],
  data() {
    return {
      imageError: false,
    };
  },
};
</script>

<style scoped>
</style>
