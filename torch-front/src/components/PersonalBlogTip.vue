<template>
  <div>
    <vue-notion-render :unofficial="true" :data="data" />
  </div>
</template>

<script>
export default {
  props: ['user', 'authUser', 'mobile'],
  data() {
    return {
      data: [],
    };
  },
  async created() {
    try {
      const data = await fetch('https://beta.notiontoblog.workers.dev/v1/page/f36a63918d1246909206813dcec928ea');
      this.data = await data.json();
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
