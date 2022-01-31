import VuexPersistence from 'vuex-persist';
import { auth } from './auth.module';
import { user } from './user.module';
import { activity } from './activity.module';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default {
  modules: {
    auth,
    user,
    activity,
  },
  plugins: [vuexLocal.plugin],
};
