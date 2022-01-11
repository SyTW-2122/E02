const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
router.get('/', UserController.allUsers);
router.put('/edit/:username', UserController.updateUserInfo);
router.get('/get/:username', UserController.getUserByUsername);
router.get('/get/:username/image', UserController.getUserImage);
router.post('/follow/:username', UserController.toggleFollow);

module.exports = router;
