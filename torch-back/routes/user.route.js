const express = require('express');
const userRoute = express.Router();

// User model
let UserModel = require('../models/User');

userRoute.route('/').get((req, res) => {
  UserModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = userRoute;