const express = require('express');
const userRoute = express.Router();
const mongoose = require('../models/User.js');
// User model
const UserModel = require('../models/User');
const passport = require('passport');
require('../config/passport')(passport);

userRoute.route('/get-usr').get((req, res) => {
  res.json(
    {
      username: 'Usuario1',
      password: '1234',
      name: 'Antonio',
      email: 'fake@mail.com'
    }
  );
});

// GET ALL USERS
userRoute.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    UserModel.find((err, users) => {
      if (err) return next(err);
      res.json(users);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

// GET USERS BY ID
userRoute.get('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    UserModel.findById(req.params.id, (err, user) => {
      if (err) return next(err);
      res.json(user);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

// POST USER
userRoute.post('/', passport.authenticate('jwt', { session: false}),(req, res, next) => {
    let token = getToken(req.heders);
    if (token) {
      UserModel.create(req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);
      });
    } else {
      return res
        .status(403)
        .send({success: false, msg: 'Unauthorized'});
    }
});

// UPDATE USER
userRoute.put('/:id',(req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

// DELETE USER
userRoute.delete('/:id',(req, res, next) => {
  UserModel.findByIdAndRemove(req.params.id, req.body, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = userRoute;