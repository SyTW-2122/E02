const userAPI = require('./user');
const authAPI = require('./auth');
const activityAPI = require('./activity');
const exerciseAPI = require('./exercise')

module.exports = (app) => {
  app.use('/api/user', userAPI);
  app.use('/api/auth', authAPI);
  app.use('/api/activity', activityAPI);
  app.use('/api/exercise', exerciseAPI);
};
