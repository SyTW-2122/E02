const passport = require('passport');
const settings = require('../config/SecretToken');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require("../models/User.js");

module.exports = {
    login: (req, res) => {
      User.findOne({
        username: req.body.username
      }, function(err, user) {
        if (err) throw err;
        if (!user) {
          res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
          return;
        } else {
          // check if password matches
          user.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch && !err) {
              // if user is found and password is right create a token
              var token = jwt.sign(user.toJSON(), settings.jwtSecret);
              // return the information including token as JSON
              res.json({success: true, token: 'JWT ' + token, data: req.body});
            } else {
              res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
            }
          });
        }
      });
    },
    register: (req, res) => {
      if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'Please pass username and password.'});
      } else {
        var newUser = new User({
          username: req.body.username,
          password: req.body.password
        });
        // save the user
        newUser.save(function(err) {
          if (err) {
            return res.json({success: false, msg: err.msg});
          }
          res.json({success: true, msg: 'Successful created new user.'});
        });
      }
    }  
};
