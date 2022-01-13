const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
router.get('/', UserController.allUsers);
router.put('/edit/:username', UserController.updateUserInfo);
router.put('/edit/:username/password', UserController.updateUserPassword);
router.get('/get/:username', UserController.getUserByUsername);
router.get('/get/user/:id', UserController.getUserById);
router.get('/get/:id/image', UserController.getUserImage);
router.post('/follow/:username', UserController.toggleFollow);

module.exports = router;
