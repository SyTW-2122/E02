const ObjectIDObj = require('mongoose').ObjectID;
const u = require('ulid');
const User = require('../models/User');
const Routine = require('../models/Routine');

module.exports = {
  addUserRoutine: (req, res) => {
    User.findOne({
      username: req.params.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Routine creation failed. User not found' });
      }
      else {
        const newRoutine = new Routine({
          name: req.body.name,
          author: req.params.username,
          authorid: user.id,
          ratings: [],
          comments: [],
          likes: [],
          exercises: [],
        });
        if (req.body.description !== '') {
          newRoutine.description = req.body.description;
        }
        if (req.body.image !== null) {
          newRoutine.image = req.body.image;
        }

        if (user.routines === undefined) {
          user.routines = [];
          user.save();
        }
        user.routines.push(newRoutine.id);
        user.save();
        newRoutine.save()
          .then(() => {
            res.status(200).json({
              routine: newRoutine,
              user,
            });
          })
          .catch((error) => {
            res.status(401).json({ success: false, msg: error.msg });
          });
      }
    });
  },
  deleteUserRoutine: (req, res) => {
    Routine.findOne({
      id: req.params.routine,
    }, (err, rout) => {
      if (err) throw err;
      if (!rout) {
        res.status(401).send({ success: false, msg: 'Routine get failed. Routine not found' });
      }
      else {
        User.updateOne(
          {
            username: req.params.username,
          },
          {
            $pull: {
              routines: rout.id,
            },
          },
          (err, user) => {
            if(err) throw err;
            if (!user) {
              res.status(401).send({ success: false, msg: 'Delete failed. User not found.' });
            }
            else {
              Routine.deleteOne({ name: req.params.routine }, (err, result) => {
                if (err) throw err;
                if (!result) {
                  res.status(401).send({ success: false, msg: 'Delete failed. User not found.' });
                }
                else {
                  res.status(200).json(result);
                }
              });
            }
          },
        );
      }
    });
  },
  updateUserRoutine: (req, res) => {
    User.findOne({
      username: req.params.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Routine creation failed. User not found' });
      }
      else {
        Routine.findOneAndUpdate({
          id: req.params.routine,
        }, (err, rout) => {
          if (err) throw err;
          if (!rout) {
            res.status(401).send({ success: false, msg: 'Routine update failed. User not found.' });
          }
          else {
            if (req.body.name !== '') {
              rout.name = req.body.name;
            }
            if (req.body.ratings !== '') {
              rout.ratings = req.body.ratings;
            }
            if (req.body.comments !== '') {
              rout.comments = req.body.comments;
            }
            if (req.body.image !== '') {
              rout.image = req.body.image;
            }
            if (req.body.description !== '') {
              rout.description = req.body.description;
            }
            if (req.body.likes !== '') {
              rout.likes = req.body.likes;
            }
            if (req.body.exercises !== '') {
              rout.exercises = req.body.exercises;
            }
            rout.save()
              .then(() => {
                res.status(200).json(rout);
              })
              .catch((error) => {
                res.status(400).json({ success: false, msg: error.msg });
              });
          }
        });
      }
    });
  },
  allUserRoutines: (req, res) => {
    User.findOne({
      username: req.params.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Routine get failed. User not found.' });
      }
      else {
        res.status(200).json(user.routines);
      }
    });
  },
  getUserRoutine: (req, res) => {
    User.findOne({
      username: req.params.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Routine get failed. User not found.' });
      }
      else {
        Routine.findOne({
          id: req.params.routine,
        }, (err, rout) => {
          if (err) throw err;
          if (!rout) {
            res.status(401).send({ success: false, msg: 'Routine get failed. Routine not found' });
          }
          else {
            res.status(200).json(rout);
          }
        });
      }
    });
  },
};
