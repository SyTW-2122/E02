const express = require('express'),
  cors = require('cors'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  userAPI = require('./route/user'),
  indexAPI = require('./route/index'),
  auth = require('./route/auth');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// API
app.use('/', indexAPI);
app.use('/api/user', userAPI);
app.use('/api/auth', auth);

app.use(require('connect-history-api-fallback')());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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
