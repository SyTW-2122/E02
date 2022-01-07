import VuexPersistence from 'vuex-persist';
import { auth } from './auth.module';
import { explorer } from './explorer.module';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default {
  modules: {
    auth,
    explorer,
  },
  plugins: [vuexLocal.plugin],
};
