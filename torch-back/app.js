let express = require('express'),
  cors = require('cors'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser');
  var util= require('util');
  var encoder = new util.TextEncoder('utf-8');


const userAPI = require('./route/user');
const auth = require('./route/auth');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/user', express.static(path.join(__dirname, 'dist')));
app.use(cors());

// API
app.use('/api/user', userAPI);
app.use('/api/auth', auth);



// Find 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);

  if (req.app.get('env') !== 'development') {
      delete err.stack;
  }

    res.status(err.statusCode || 500).json(err);
});

module.exports = app;
