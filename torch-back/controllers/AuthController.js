const passport = require('passport');
require('../config/passport')(passport);
const jwt = require('jsonwebtoken');
const ObjectIDObj = require('mongoose').ObjectID;
const settings = require('../config/SecretToken');
const User = require('../models/User');

module.exports = {
  root: (req, res) => {
    res.send('Welcome to auth API from Heroku');
  },
  login: (req, res) => {
    if (!req.body.username || !req.body.password) {
      res.json({ success: false, msg: 'Please pass username and password.' });
    }
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
            res.json({
              success: true,
              msg: `Welcome ${req.body.username}!`,
              token: `JWT ${token}`,
              data: req.body,
            });
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
          newUser.save((error) => {
            if (error) {
              res.json({ success: false, msg: error.msg });
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
  user: (req, res) => {
    if (!req.user.id) {
      res.status(400).json({
        success: false,
        msg: 'Please provide an ID',
      });
    }
    const user = User
      .find({ _id: ObjectIDObj(req.user.id) })
      // All fields except password
      .project({ password: 0 })
      .toArray()
      .then(() => {
        if (!user) {
          return res.status(404).json({
            success: false,
            msg: 'User does not exist',
          });
        }
        res.json({ success: true, user });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          msg: 'Unable to fetch user',
          err: err.message,
        });
      });
  },
};
