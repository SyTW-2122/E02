import { defineFeature, loadFeature} from 'jest-cucumber';
import { mount, createLocalVue} from '@vue/test-utils';
import SignIn from '@/views/SignIn.vue';

const feature = loadFeature('./SignIn.feature');
defineFeature(feature, (test) => {
  test('Opening the sign in page', ({ given, when, then, and }) => {
    given('the page is open in a browser', () => {
     wrapper =  mount(SignIn);
    });
    when('user inspects the page', () => {
      // Nothing yet
    });
    then('user should see the User profile aspects', () => {
      // Nothing yet
    });
  });
});
