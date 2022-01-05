// Style imports

import './registerServiceWorker';

import VueCropper from 'vue-cropperjs';
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from 'bootstrap-vue';
import PortalVue from 'portal-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/custom-variables.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusSquare,
  faBell,
  faHistory,
  faBars,
  faPowerOff,
  faUserSecret,
  faHome,
  faSearch,
  faUserCircle,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

// Framework imports
import Vue from 'vue';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import ImageUploader from 'vue-image-upload-resize';
import storeConfig from './store/index';
import router from './router';
import App from './App.vue';

Vue.use(VueCropper);
Vue.use(ImageUploader);

/// Style addons activation
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(PortalVue);
// Font awesome icons used in the app
library.add(
  faPlusSquare,
  faBell,
  faHistory,
  faBars,
  faPowerOff,
  faUserSecret,
  faHome,
  faSearch,
  faUserCircle,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Framework tools activation
Vue.use(Vuex);
Vue.use(VeeValidate);

const store = new Vuex.Store(storeConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
