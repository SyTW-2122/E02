const mongoose = require('mongoose'); // eslint-disable-line
const Schema = mongoose.Schema; // eslint-disable-line
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  subname: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
  },
  bio: {
    type: Schema.Types.String,
  },
  image: {
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  followers: {
    type: Schema.Types.Array,
  },
  following: {
    type: Schema.Types.Array,
  },
  valoration: {
    type: Schema.Types.Number,
  },
  newNotifications: {
    type: Schema.Types.Array,
  },
  routines: {
    type: Schema.Types.Array,
  },
}, { timestamps: true });

userSchema.pre('save', function(next) { // eslint-disable-line 
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => { // eslint-disable-line
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, (err, hash) => { // eslint-disable-line
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  }
  else {
    return next();
  }
});

userSchema.methods.comparePassword = function bCryptCompare(passw, cb) {
  bcrypt.compare(passw, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};

userSchema.methods.deleteData = function deleteData(uname, cb) {
  const userId = this.findOne({
    username: uname,
  }).id;
  console.log(userId);
};

module.exports = mongoose.model('User', userSchema);
