const app = require('./app.js'),
  mongoose = require('mongoose');

// Database config
const uri = 'mongodb+srv://torch-carrier:olympic!@torch.gzcmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
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
 app.listen(port, () => {
    console.log('Connected to port ' + port)
  });
