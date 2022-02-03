import VuexPersistence from 'vuex-persist';
import { auth } from './auth.module';
import { user } from './user.module';
// import { exercise } from './exercise.module';
import { routine } from './routine.module';
import { activity } from './activity.module';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default {
  modules: {
    routine,
    auth,
    user,
    activity,
  },
  plugins: [vuexLocal.plugin],
};
