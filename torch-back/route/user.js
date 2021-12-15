const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get('', UserController.all)
router.post('', UserController.create)

module.exports = router;
