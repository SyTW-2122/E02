const passport = require('passport');
require('../config/passport')(passport);
const Routine = require('../models/Routine');
const User = require('../models/User');

module.exports = {
  allRoutines: (req, res) => {
    Routine.find((err, routines) => {
      if (err) {
        res.json(err);
      }
      else {
        res.json(routines);
      }
    });
  },
  allUsers: (req, res) => {
    User.find((err, users) => {
      if (err) {
        res.json(err);
      }
      else {
        res.json(users);
      }
    });
  },
  getUserByUsername: (req, res) => {
    User.findOne({
      username: req.params.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Update failed. User not found.' });
      }
      else {
        res.status(200).json(user);
      }
    });
  },
  getRoutineBySportName: (req, res) => {
    Routine.findOne({
      sportName: req.params.sportName,
    }, (err, routine) => {
      if (err) throw err;
      if (!routine) {
        res.status(401).send({ success: false, msg: 'Update failed. Routine not found.' });
      }
      else {
        res.status(200).json(routine);
      }
    });
  },
};
