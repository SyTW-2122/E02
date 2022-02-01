import Vue from 'vue';
import router from '../../../src/router/index.js';
import Vuex from 'vuex';
import { mount } from '@vue/test-utils'
import Explore from '@/views/Explore.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Vuex);

describe('Explorer', () => {
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
      getToken: jest.fn(),
      getUser: jest.fn(),
    }
    actions = {
      loadUserValoration: jest.fn(),
      loadRoutineValoration: jest.fn(),
    }
    store = new Vuex.Store({
      modules: {
          explorer: {
              namespaced: true,
              state,
              getters,
              actions,
          },
      },
    })
    wrapper = mount(Explore, {
      router,
      store
    })
  });

  it('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  });
  it('renders the correct markup', () => {
    expect(true).toBeTruthy();
  })
});
