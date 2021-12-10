const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  credentiasl: {
    username: String,
    name: String,
    password: String,
    email: String,
  },
}, {
  collection: 'users',
});

module.exports = mongoose.model('User', UserSchema);