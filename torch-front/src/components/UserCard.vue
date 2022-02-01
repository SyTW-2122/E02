<template>
  <b-row no-gutters>
    <b-col md="6">
      <b-card :src="user.image" img-top>
        <b-card-text>
          {{user.username}}
          {{user.valoration}}
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['user'],
};
</script>

<style scoped>

</style>
