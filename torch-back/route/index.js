const express = require('express');
const userAPI = require('./user');
const authAPI = require('./auth');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
module.exports = (app) => {
  app.use('/api/user', userAPI);
  app.use('/api/auth', authAPI);
};
