const express = require('express');
const userRoute = express.Router();

// User model

userRoute.route('/').get((req, res) => {
});

module.exports = userRoute;