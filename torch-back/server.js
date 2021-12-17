const dotenv = require('dotenv'),
  mongoose = require('mongoose'),
  app = require('./app');

dotenv.config();
// Database config
const uri = process.env.MAIN_DB_URL;
mongoose.Promise = require('bluebird');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database conection successful'))
  .catch((err) => console.error(err));

// Create port
const port = process.env.PORT || 5000;

// Start server
module.exports = app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
