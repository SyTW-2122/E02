const express = require('express');
//const { allUserRoutines } = require('../controllers/UserController');
const UserController = require('../controllers/UserController');

const router = express.Router();
router.get('/', UserController.allUsers);
router.put('/edit/:username', UserController.updateUserInfo);
router.put('/edit/:username/password', UserController.updateUserPassword);
router.put('/notification/:username/view', UserController.updateUserNotification);
router.get('/get/:username', UserController.getUserByUsername);
router.get('/get/user/:id', UserController.getUserById);
router.get('/get/:id/image', UserController.getUserImage);
router.post('/follow/:username', UserController.toggleFollow);

// routine CRUD

router.get('/:username/routines', UserController.allUserRoutines);
router.get('/:username/:routine', UserController.getRoutinesByUser);
router.post('/createroutine/:username', UserController.addUserRoutine);
// router.put('/editroutine/:username/:routine', UserController.updateUserRoutine);
router.delete('/:username/:routine', UserController.deleteUserRoutine);

module.exports = router;
