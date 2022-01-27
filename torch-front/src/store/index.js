import VuexPersistence from 'vuex-persist';
import { auth } from './auth.module';
import { user } from './user.module';
import { exercise } from './exercise.module';
import { routine } from './routine.module';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default {
  modules: {
    auth,
    user,
    exercise,
    routine,
  },
  plugins: [vuexLocal.plugin],
};
