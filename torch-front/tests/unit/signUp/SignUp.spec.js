import { defineFeature, loadFeature} from 'jest-cucumber';
import { mount, createLocalVue} from '@vue/test-utils';
import SignUp from '@/views/SignUp.vue';

const feature = loadFeature('./SignUp.feature');
defineFeature(feature, (test) => {
  test('Opening the sign up page', ({ given, when, then, and }) => {
    given('the page is open in a browser', () => {
     wrapper =  mount(SignUp);
    });
    when('user inspects the page', () => {
      // Nothing yet
    });
    then('user should see the User profile aspects', () => {
      // Nothing yet
    });
  });
});