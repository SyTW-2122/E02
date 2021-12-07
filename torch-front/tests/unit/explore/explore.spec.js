import Explore from '@/views/Explore.vue';
import { defineFeature, loadFeature} from 'jest-cucumber';
import { mount, createLocalVue} from '@vue/test-utils';

const feature = loadFeature('./explore.feature');
defineFeature(feature, (test) => {
  test('Opening the explore page', ({ given, when, then, and }) => {
    given('the page is open in a browser', () => {
     wrapper =  mount(Explore);
    });
    when('user inspects the page', () => {
      // Nothing yet
    });
    then('user should see the User profile aspects', () => {
      // Nothing yet
    });
  });
});