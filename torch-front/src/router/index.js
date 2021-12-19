import Vue from 'vue';
import VueRouter from 'vue-router';
import Errors from '../views/404NotFound.vue';
import Explore from '../views/Explore.vue';
import User from '../views/User.vue';
import Activity from '../views/Activity.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '*',
    component: Errors,
    meta: { layout: 'none' },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
