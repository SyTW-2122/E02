// routine CRUD
const express = require('express');
const RoutineController = require('../controllers/RoutineController');

const router = express.Router();
router.get('/:username/routines', RoutineController.allUserRoutines);
router.get('/:username/routines/:routine', RoutineController.getUserRoutine);
router.post('/createroutine/:username', RoutineController.addUserRoutine);
router.put('/editroutine/:username/:routine', RoutineController.updateUserRoutine);
router.delete('/:username/:routine', RoutineController.deleteUserRoutine);

module.exports = router;
