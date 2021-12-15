module.exports = (app) => {
  app.use('/api/user', require('./api/user'));
  app.use('/api/auth', require('./api/auth'));
  app.use('/upload', require('./multer'));
};
