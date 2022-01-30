//const Routine = require('../models/Routine');
const passport = require('passport');
require('../config/passport')(passport);
const Exercise = require('../models/Exercise');

module.exports = {
  getExercise: (req, res) => {
    Exercise.findOne({
      name: req.params.exercise,
    }, (err, exer) => {
      if (err) throw err;
      if (!exer) {
        res.status(401).send({ success: false, msg: 'Update failed. Exercise not found.' });
      }
      else {
        res.status(200).json(exer);
      }
    });
  },
  addExercise: (req, res) => {
    const newExercise = new Exercise({
      name: req.body.name,
      reps: req.body.reps,
      sets: req.body.sets,
      status: req.body.status,
    });
    if (req.body.image !== null) {
      newExercise.image = req.body.image;
    }
    if (req.body.media !== null) {
      newExercise.media = req.body.media;
    }
    newExercise.save()
      .then(() => {
        res.status(200).json({exer: newExercise});
      })
      .catch((error) => {
        res.status(401).json({ success: false, msg: error.msg});
      });
  }
};