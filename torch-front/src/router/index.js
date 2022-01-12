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
import ChangePassword from '../components/ChangePassword.vue';
import FollowersList from '../components/FollowersList.vue';
import FollowingList from '../components/FollowingList.vue';

Vue.use(VueRouter);

const routes = [
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
    path: '/',
    name: 'sign-in',
    component: SignIn,
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
    path: '/:name',
    name: 'user',
    component: User,
    props: true,
  },
  {
    path: '/:name/edit-profile',
    name: 'editProfile',
    props: true,
    component: EditProfile,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/:name/edit-profile/password',
    name: 'editPassword',
    props: true,
    component: ChangePassword,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/:name/followers',
    name: 'followersList',
    props: true,
    component: FollowersList,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/:name/following',
    name: 'followingList',
    props: true,
    component: FollowingList,
    meta: { transitionName: 'slide' },
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
