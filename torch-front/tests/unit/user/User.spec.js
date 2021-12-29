import Vue from 'vue';
import router from '../../../src/router/index.js';
import Vuex from 'vuex';
import { mount } from '@vue/test-utils'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VeeValidate from 'vee-validate';

import User from '../../../src/views/User.vue'

Vue.use(VeeValidate);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Vuex);

describe('User', () => {
  let store;
  let state;
  let getters;
  let actions;
  let wrapper;

  beforeEach(() => {
        
    state = {
      status: jest.fn(),
      userData: jest.fn(),
      token: jest.fn(),
    }
    getters = {
      isLoggedIn: jest.fn(),
      getToken: jest.fn(),
      getUser: jest.fn(),
    }
    actions = {
      login: jest.fn(),
      logout: jest.fn(),
      register: jest.fn(),
      attempt: jest.fn(),
    }
    store = new Vuex.Store({
        modules: {
            auth: {
                namespaced: true,
                state,
                getters,
                actions,
            },
        },
    })
    wrapper = mount(User, {
      router,
      store
    })
  });

  it('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  });
});
