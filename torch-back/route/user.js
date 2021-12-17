const express = require('express');
const userRoute = express.Router();
const passport = require('passport');
// User model
const UserModel = require('../models/User');
require('../config/passport')(passport);

const getToken = (headers) => {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    }
    return null;
  }
  return null;
};

userRoute.route('/get-usr').get((req, res) => {
  res.json(
    {
      username: 'Usuario1',
      password: '1234',
      name: 'Antonio',
      email: 'fake@mail.com'
    },
  );
});

module.exports = userRoute;
