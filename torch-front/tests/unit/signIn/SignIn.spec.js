import { defineFeature, loadFeature} from 'jest-cucumber';
import { mount, createLocalVue, shallowMount} from '@vue/test-utils';
import SignIn from '@/views/SignIn.vue';
import storeModule from '../../../src/store/index';

const feature = loadFeature('./SignIn.feature', { loadRelativePath: true, errors: true });
defineFeature(feature, test => {
  test('Opening the sign in page', ({
    given,
    when,
    then,
    and
  }) => {
    given('the page is open in a browser', () => {
      const wrapper =  shallowMount(SignIn, {storeModule});
    });

    when('user inspects the page', () => {
      
    });

    then('user should see the form login', () => {

    });

    and('page should contain logo', () => {

    });

    and('page should contain title', () => {

    });

    and('page should contain the option to remember the login information', () => {

    });

    and('page should contain the option to login with Google', () => {

    });

    and('page should contain the option to login with Facebook', () => {

    });

    and('When user taps on login buttom', () => {

    });

    then('page content is changed', () => {

    });

    and('the user view is displayed', () => {

    });

    and('When user taps on Create a torch account', () => {

    });

    then('page content is changed', () => {

    });

    and('the sign up view is displayed', () => {

    });

    and('When user taps on forgot password', () => {

    });

    then('page content is changed', () => {

    });

    and('When user taps on login with Google', () => {

    });

    then('page content is changed', () => {

    });

    and('When user taps on login with Facebook', () => {

    });

    then('page content is changed', () => {

    });
  });
});