let express = require('express'),
  cors = require('cors'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  database = require('./database'),
  bodyParser = require('body-parser');

// Database config
mongoose.Promise = require('bluebird');
mongoose
   .connect("mongodb://localhost/torch", { promiseLibrary: require('bluebird') })
   .then(() => console.log('conection successful'))
   .catch((err) => console.error(err));

// // Connect mongoDB
// mongoose.connect(database.db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Database connected");
//   },
//   error => {
//     console.log("Database could't be connected to: " + error);
//   }
// );

const userAPI = require('./routes/user');
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

// Create port
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

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