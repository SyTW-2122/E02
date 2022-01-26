const userAPI = require('./user');
const authAPI = require('./auth');
const explorerAPI = require('./explorer');

module.exports = (app) => {
  app.use('/api/user', userAPI);
  app.use('/api/auth', authAPI);
  app.use('/api/explorer', explorerAPI);
};
