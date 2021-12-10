// Style imports

import './registerServiceWorker';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/custom-variables.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faHome,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

// Framework imports
import Vue from 'vue';
import Vuex from 'vuex';
import storeConfig from './store/index';
import router from './router';
import App from './App.vue';

/// Style addons activation
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Font awesome icons used in the app
library.add(faUserSecret, faHome, faSearch, faUserCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Framework tools activation
Vue.use(Vuex);

const store = new Vuex.Store(storeConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
