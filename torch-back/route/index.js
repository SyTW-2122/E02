const userAPI = require('./user');
const authAPI = require('./auth');
const activityAPI = require('./activity');

module.exports = (app) => {
  app.use('/api/user', userAPI);
  app.use('/api/auth', authAPI);
  app.use('/api/activity', activityAPI);
};
