const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
router.get('/', UserController.allUsers);
router.put('/edit/:username', UserController.updateUserInfo);

module.exports = router;
