import VuexPersistence from 'vuex-persist';
import { auth } from './auth.module';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default {
  modules: {
    auth,
  },
  plugins: [vuexLocal.plugin],
};
