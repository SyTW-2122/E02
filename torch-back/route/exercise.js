const express = require('express');
const ExerciseController = require('../controllers/ExerciseController');

const router = express.Router();

router.get('/get/:exercise', ExerciseController.getExercise);
router.post('/createexercise', ExerciseController.addExercise);
router.delete('/:exercise', ExerciseController.deleteExercise);
router.put('/:exercise', ExerciseController.updateExercise);

module.exports = router;