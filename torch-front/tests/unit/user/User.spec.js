import { defineFeature, loadFeature} from 'jest-cucumber';
import { mount, createLocalVue} from '@vue/test-utils';
import User from '@/views/User.vue';

const feature = loadFeature('./User.feature');
defineFeature(feature, (test) => {
  test('Opening the user page', ({ given, when, then, and }) => {
    given('the page is open in a browser', () => {
     wrapper =  mount(User);
    });
    when('user inspects the page', () => {
      // Nothing yet
    });
    then('user should see the User profile aspects', () => {
      // Nothing yet
    });
  });
});
