const express = require('express'),
  cors = require('cors'),
  path = require('path'),
  logger = require('morgan'),
  userAPI = require('./route/user'),
  exerciseAPI = require('./route/exercise'),
  routineAPI = require('./route/routine'),
  indexAPI = require('./route/staticIndex'),
  auth = require('./route/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// API
app.use('/', indexAPI);
app.use('/api/user', userAPI);
app.use('/api/auth', auth);
app.use('/api/exercise', exerciseAPI);
app.use('/api/routine', routineAPI);

app.use(require('connect-history-api-fallback')());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.all('*', (req, res) => res.redirect('/'));
// Find 404
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('404NotFound', { title: 'Express' });
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
