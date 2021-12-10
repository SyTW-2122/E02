const express = require('express');
const userRoute = express.Router();

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

module.exports = userRoute;