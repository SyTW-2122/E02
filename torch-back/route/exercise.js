const express = require('express');
const ExerciseController = require('../controllers/ExerciseController');

const router = express.Router();

router.get('/get/:exercise', ExerciseController.getExcercise);
router.post('/createexercise/:username', ExerciseController.addExcercise);


module.exports = router;