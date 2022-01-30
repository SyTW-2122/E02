const express = require('express');
const ExerciseController = require('../controllers/ExerciseController');

const router = express.Router();

router.get('/get/:exercise', ExerciseController.getExercise);
router.post('/createexercise', ExerciseController.addExercise);

module.exports = router;