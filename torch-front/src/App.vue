<template>
  <div class="fluid-container">
    <MobileNavbar v-if="mobile && !['sign-in','sign-up'].includes($route.name)"/>
    <DesktopNavbar v-else-if="!mobile && !['sign-in','sign-up'].includes($route.name)"/>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import DesktopNavbar from '@/components/DesktopNavbar.vue';
import MobileNavbar from '@/components/MobileNavbar.vue';

export default {
  components: {
    MobileNavbar,
    DesktopNavbar,
  },
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    mobile: false,
  }),
  mounted() {
    this.getDimensions();
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    this.getDimensions();
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      } else {
        this.mobile = document.documentElement.clientWidth <= 800;
      }
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
