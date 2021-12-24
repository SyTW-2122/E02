const express = require('express');
const AuthController = require('../controllers/AuthController');
const auth = require('../config/auth');

const router = express.Router();
router.get('/', AuthController.root);
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/user', auth, AuthController.user);

module.exports = router;
