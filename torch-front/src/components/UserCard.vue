<template>
   <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img v-if="mobile" fluid
          id="picture"
          class="img-sm-limit center-cropped"
          alt="user card picture"
          :src="imageUrl"
          @error="imageError = true"></b-card-img>
        <b-card-img v-else
          id="picture"
          :src="imageUrl"
          @error="imageError = true"
          class="img-limit center-cropped"
          alt="user card picture"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <title>
            {{user.username}}
          </title>
          <b-card-text>
            {{user.valoration}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      imageError: false,
    };
  },
};
</script>

<style scoped>

</style>
