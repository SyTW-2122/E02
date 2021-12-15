const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { secret } = require('../config/settings');

module.exports = {
  generateToken: (userData) => {
    const payload = {
      user: {
        id: userData.id,
        email: userData.email,
        name: userData.name
      }
    };
    return jwt.sign(
      payload,
      secret,
      {
        expiresIn: 3600
      }
    );
  },

  createPassword: async (userPassword) => bcrypt
    .hash(userPassword, 12),

  comparePassword: async (userpassword, givenpassword) => bcrypt
    .compare(userpassword, givenpassword)
};
