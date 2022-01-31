const express = require('express');
const ActivityController = require('../controllers/ActivityController');

const router = express.Router();

router.get('/:username/activity', ActivityController.getAllActivities);

module.exports = router;
