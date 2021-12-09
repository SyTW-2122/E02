import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore.vue';
import User from '../views/User.vue';
import Activity from '../views/Activity.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore,
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity,
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
