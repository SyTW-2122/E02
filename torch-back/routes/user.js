const express = require('express');
const userRoute = express.Router();
const mongoose = require('../models/User.js');
// User model
let UserModel = require('../models/User');

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
userRoute.get('/',(req, res, next) => {
  UserModel.find((err, users) => {
    if (err) return next(err);
    res.json(users);
  });
});

// GET USERS BY ID
userRoute.get('/:id',(req, res, next) => {
  UserModel.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    res.jons(user);
  });
});

// POST USER
userRoute.post('/',(req, res, next) => {
  UserModel.create(req.body, (err, user) => {
    if (err) return next(err);
    res.jons(user);
  });
});

// UPDATE USER
userRoute.post('/:id',(req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) return next(err);
    res.jons(user);
  });
});
// UPDATE USER
userRoute.post('/:id',(req, res, next) => {
  UserModel.findByIdAndRemove(req.params.id, req.body, (err, user) => {
    if (err) return next(err);
    res.jons(user);
  });
});

module.exports = userRoute;