import Vue from 'vue';
import Vuex from 'vuex';
import { shallowMount } from '@vue/test-utils'
import SignUp from '@/views/SignUp.vue'

Vue.use(Vuex);

describe('SignUp.vue', () => {
  let store;
  let authModule;

  beforeEach(() => {
    state = {
      status: { loggedIn: false },
      userData: null,
      token: null,
    }
  })
  
  const wrapper = shallowMount(SignUp)

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('Sign up page.')
  })

  test('should show the form element on the user register', () => {
    expect(wrapper.find("form").exists()).toBe(true)
  })

  test('should contain input fields', () => {
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('form should contain input fields with type="text"', () => {
    expect(wrapper.get('input[type=tjavascriptext]').exists()).toBe(true)
  })

  test('button trigger event', async () => {
    await wrapper.find('form > button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('submit')
  })
})
