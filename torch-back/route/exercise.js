const express = require('express');
const ExerciseController = require('../controllers/ExerciseController');

const router = express.Router();

router.get('/', ExerciseController.getAllExercise);
router.get('/get/:exercise', ExerciseController.getExercise);
router.post('/createexercise', ExerciseController.addExercise);
router.delete('/delete/:exercise', ExerciseController.deleteExercise);
router.put('/:exercise', ExerciseController.updateExercise);

module.exports = router;