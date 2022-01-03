<template>
  <b-container id="tools-tab">
      <b-tabs content-class="mt-3" justified>
        <b-tab>
          <template #title>
            <font-awesome-icon icon="history" class="fa-2x"/>
          </template>
          <p>I'm the history tab</p>
        </b-tab>
        <b-tab>
          <template #title>
            <font-awesome-icon icon="plus-square" class="fa-2x"/>
          </template>
          <p>I'm the creator tab</p>
        </b-tab>
        <b-tab>
          <template #title>
            <font-awesome-icon icon="bell" class="fa-2x"/>
          </template>
          <p>I'm the notifications tab</p>
        </b-tab>
      </b-tabs>
    </b-container>
</template>

<script>
export default {
  name: 'ProfileTools',
};
</script>
