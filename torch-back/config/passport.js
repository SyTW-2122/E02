const JwtStrategyObj = require('passport-jwt').Strategy,
  ExtractJwtObj = require('passport-jwt').ExtractJwt;

// load up the user model
var User = require('../models/User');
var settings = require('./SecretToken'); // get settings file

module.exports = (passport) => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwtObj.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = settings.jwtSecret;
  passport.use(new JwtStrategyObj(opts, (jwtPayload, done) => {
    User.findOne({ id: jwtPayload.id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      }
      else {
        done(null, false);
      }
      return null;
    });
  }));
};
