const userAPI = require('./user');
const authAPI = require('./auth');

module.exports = (app) => {
  app.use('/api/user', userAPI);
  app.use('/api/auth', authAPI);
};
