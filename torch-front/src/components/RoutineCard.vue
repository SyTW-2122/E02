<template>
  <b-row no-gutters>
    <b-col md="6">
      <b-card :src="routine.image" img-top>
        <b-card-text>
          {{rouine.name}}
          {{routine.likes.length}}
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'RoutineCard',
  props: ['routine'],
};
</script>

<style scoped>

</style>
