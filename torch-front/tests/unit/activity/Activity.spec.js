import { defineFeature, loadFeature} from 'jest-cucumber';
import { mount, createLocalVue} from '@vue/test-utils';
import Activity from '@/views/Activity.vue';

const feature = loadFeature('./Activity.feature');
defineFeature(feature, (test) => {
  test('Opening the activity page', ({ given, when, then, and }) => {
    given('the page is open in a browser', () => {
     wrapper =  mount(Activity);
    });
    when('user inspects the page', () => {
      // Nothing yet
    });
    then('user should see the activities aspects', () => {
      // Nothing yet
    });
  });
});