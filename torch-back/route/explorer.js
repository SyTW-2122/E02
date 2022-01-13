const express = require('express');
const ExplorerController = require('../controllers/ExplorerController');

const router = express.Router();
router.get('/', ExplorerController.allExplorer);
router.get('/get/:username', ExplorerController.getUserByUsername);
router.get('/get/:sportName', ExplorerController.getRoutineBySportName);

module.exports = router;
