const express = require('express'),
  cors = require('cors'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  userAPI = require('./route/user'),
  auth = require('./route/auth');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.options('*', cors());
app.use(cors());

// API
app.use('/api/user', userAPI);
app.use('/api/auth', auth);

// Find 404
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  if (req.app.get('env') !== 'development') {
    delete err.stack;
  }
  res.status(err.statusCode || 500).json(err);
});

module.exports = app;
