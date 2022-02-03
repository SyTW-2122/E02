<template>
  <div>
    <MobileNavbar v-if="mobile && ['activity','explore','user'].includes($route.name)"/>
    <DesktopNavbar v-else-if="!mobile && ['activity','explore','user'].includes($route.name)"/>
    <transition
      :name="transitionName"
      mode="out-in">
      <router-view :mobile="mobile"/>
    </transition>
  </div>
</template>
<script>
// @ is an alias to /srcç
import { mapActions } from 'vuex';

import DesktopNavbar from '@/components/DesktopNavbar.vue';
import MobileNavbar from '@/components/MobileNavbar.vue';

const DEFAULT_TRANSITION = 'fade';

export default {
  components: {
    MobileNavbar,
    DesktopNavbar,
  },
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    mobile: false,
    transitionName: DEFAULT_TRANSITION,
  }),
  mounted() {
    this.getDimensions();
    window.addEventListener('resize', this.getDimensions);
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName
      || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth
          ? 'slide-down'
          : 'slide-up';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },
  unmounted() {
    this.getDimensions();
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    ...mapActions(['attempt', 'logout']),
    checkToken() {
      this.atempt();
    },
    created() {
      this.loading = true;
      this.checkToken();
      window.addEventListener('load', this.loading = false);
    },
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.05s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition-duration: 0.1s;
  transition-property: height, transform;
  transition-timing-function: ease-in-out;
  overflow: hidden;
}

.slide-up-enter,
.slide-down-leave-active {
  transform: translate(0, 10em);
}

.slide-up-leave-active,
.slide-down-enter {
  transform: translate(0, -10em);
}

</style>
