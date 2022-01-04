import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store/index';
import Errors from '../views/404NotFound.vue';
import Explore from '../views/Explore.vue';
import User from '../views/User.vue';
import Activity from '../views/Activity.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import EditProfile from '../components/EditProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/user/edit-profile',
    name: 'editProfile',
    component: EditProfile,
    meta: { transitionName: 'slide' },
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
    path: '/',
    name: 'sign-in',
    component: SignIn,
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
  base: process.env.BASE_URL,
  routes,
});

export default router;
