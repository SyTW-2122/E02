const util = require('util');
const express = require('express'),
  cors = require('cors'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  database = require('./database');
// Database config
const uri = 'mongodb+srv://torch-carrier:olympic!@torch.gzcmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const encoder = new util.TextEncoder('utf-8');

mongoose.Promise = require('bluebird');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(() => console.log('Database conection successful'))
  .catch((err) => console.error(err));

const userAPI = require('./routes/user');
const auth = require('./routes/auth');

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
app.use('/user', userAPI);
app.use('/api/auth', auth);

// Create port
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

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
