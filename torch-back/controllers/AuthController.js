const passport = require('passport');
require('../config/passport')(passport);
const jwt = require('jsonwebtoken');
const settings = require('../config/SecretToken');
const User = require('../models/User');

module.exports = {
  login: (req, res) => {
    User.findOne({
      username: req.body.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
      }
      else {
        // check if password matches
        user.comparePassword(req.body.password, (error, isMatch) => {
          if (isMatch && !error) {
            // if user is found and password is right create a token
            const token = jwt.sign(user.toJSON(), settings.jwtSecret);
            // return the information including token as JSON
            res.json({ success: true, token: `JWT ${token}`, data: req.body });
          }
          else {
            res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
          }
        });
      }
    });
  },
  register: (req, res) => {
    if (!req.body.username || !req.body.password) {
      res.json({ success: false, msg: 'Please pass username and password.' });
    }
    else {
      User.findOne({
        username: req.body.username,
      }, (err, user) => {
        if (err) throw err;
        if (!user) {
          const newUser = new User({
            username: req.body.username,
            password: req.body.password,
          });
          // save the user
          newUser.save((err) => {
            if (err) {
              res.json({ success: false, msg: err.msg });
            }
            else {
              res.json({ success: true, msg: 'Successful created new user.' });
            }
          });
        }
        else {
          res.status(401).send({ success: false, msg: 'User already exists' });
        }
      });
    }
  },
};
