//const Routine = require('../models/Routine');
const passport = require('passport');
require('../config/passport')(passport);
const Exercise = require('../models/Exercise');

module.exports = {

  getAllExercise: (req, res) => {
    Exercise.find((err, exercises) => {
      if(err) {
        res.json(err);
      }
      else {
        res.json(exercises);
      }
    });
  },
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
  },

  deleteExercise: (req, res) => {
    Exercise.deleteOne({
      name: req.params.exercise,
    }, (err, result) => {
      if (err) throw err;
      if (!result) {
        res.status(401).send({ success: false, msg: 'Update failed. Exercise not found.' });
      }
      else {
        res.status(200).json(result);
      }
    });
  },

  updateExercise: (req, res) => {
    Exercise.findOneAndUpdate({
      name: req.params.exercise,
    }, (err, result) => {
      if (err) throw err;
      if (!result) {
        console.log("Erichonchi");
        res.status(401).send({ success: false, msg: 'Update failed. Exercise not found.' });
      }
      else {
        if (req.body.name !== '') {
          result.name = req.body.name;
        }
        if (req.body.reps !== '') {
          result.reps = req.body.reps;
        }
        if (req.body.sets !== '') {
          result.sets = req.body.sets;
        }
        if (req.body.status !== '') {
          result.status = req.body.status;
        }
        if (req.body.image !== null) {
          result.image = req.body.image;
        }
        if (req.body.media !== null) {
          result.media = req.body.media;
        }
        result.save()
        .then(() => {
          res.status(200).json(result);
        })
        .catch((error) => {
          res.status(400).json({ success: false, msg: error.msg });
        });
      }
    });
  }
};