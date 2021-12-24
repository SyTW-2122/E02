import { mount, createLocalVue, shallowMount} from '@vue/test-utils';
import User from '@/views/User.vue';
import vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

const local = createLocalVue();
local.use(vuex);

describe('User', () => {
  let state;
  let store;
  beforeEach(() => {
    state = {
      errorMsg: jest.fn(),
      error: jest.fn(),
    }
    store = new vuex.Store({
      state
    })
  });
  it ('is vue instance', () => {
    const wrapper = mount(User, {store, local});
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
