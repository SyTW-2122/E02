const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/login', AuthController.login);
// router.post('/delete/:username', AuthController.delete);
router.post('/register', AuthController.register);

module.exports = router;
