//const Routine = require('../models/Routine');
const Exercise = require('../models/Exercise');

module.exports = {
  getExcercise: (req, res) => {
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
    })
  },
  addExcercise: (req, res) => {
  }
}