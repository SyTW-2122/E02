import VuexPersistence from 'vuex-persist';
import { auth } from './auth.module';
import { user } from './user.module';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default {
  modules: {
    auth,
    user,
  },
  plugins: [vuexLocal.plugin],
};
