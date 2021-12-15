const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const settings = require('../config/settings');
// const AuthController = require('../../controllers/api/AuthController');
require('../config/passport')(passport);

const router = express.Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  }
  else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save((err) => {
      if (err) {
        return res.json({ success: false, msg: err.msg });
      }
      return res.json({ success: true, msg: 'Successful created new user.' });
    });
  }
});

router.post('/login', (req, res) => {
  User.findOne({
    username: req.body.username
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
          const token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          res.json({ success: true, token: `JWT ${token}` });
        }
        else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});

// router.post('/login',AuthController.login)

module.exports = router;
