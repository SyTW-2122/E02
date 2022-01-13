const passport = require('passport');
require('../config/passport')(passport);
const Explorer = require('../models/Explorer');

module.exports = {
  allExplorer: (req, res) => {
    Explorer.find((err, explorer) => {
      if (err) {
        res.json(err);
      }
      else {
        res.json(explorer);
      }
    });
  },
  getUserByUsername: (req, res) => {
    Explorer.findOne({
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
    Explorer.findOne({
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
