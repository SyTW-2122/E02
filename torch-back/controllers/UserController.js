const passport = require('passport');
require('../config/passport')(passport);
const jwt = require('jsonwebtoken');
const ObjectIDObj = require('mongoose').ObjectID;
const settings = require('../config/SecretToken');
const User = require('../models/User');

module.exports = {
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
  getUserById: (req, res) => {
    User.findOne({
      _id: req.params.id,
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
  getUserImage: (req, res) => {
    User.findOne({
      _id: req.params.id,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Update failed. User not found.' });
      }
      else {
        res.status(200).json(user.image);
      }
    });
  },
  toggleFollow: (req, res) => {
    User.findOne({
      username: req.params.username,
    }, (err, userToFollow) => {
      if (err) throw err;
      if (!userToFollow) {
        res.status(401).send({ success: false, msg: 'Update failed. User not found.' });
      }
      else {
        User.findOne({
          username: req.body.username,
        }, (err, currentUser) => {
          if (err) throw err;
          if (!currentUser) {
            res.status(401).send({ success: false, msg: 'Update failed. User not found.' });
          }
          else {
            if (currentUser.following === undefined) {
              currentUser.following = [];
              currentUser.save();
            }
            if (userToFollow.followers === undefined) {
              userToFollow.followers = [];
              userToFollow.save();
            }

            console.log(currentUser.id);
            const isFollowing = currentUser.following
              .find((el) => el === userToFollow.id);

            if (isFollowing) {
              currentUser.following = currentUser.following
                .filter((el) => el !== userToFollow.id);
              userToFollow.followers = userToFollow.following
                .filter((el) => el !== currentUser.id);
            }
            else {
              currentUser.following.push(userToFollow.id);
              userToFollow.followers.push(currentUser.id);
            }
            currentUser.save();
            userToFollow.save();
            res.status(200).json({
              current: {
                followers: currentUser.followers,
                following: currentUser.following,
              },
              toFollow: {
                followers: userToFollow.followers,
                following: userToFollow.following,
              },
            });
          }
        });
      }
    });
  },
  updateUserInfo: (req, res) => {
    User.findOne({
      username: req.params.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Update failed. User not found.' });
      }
      else {
        if (req.body.username !== '') {
          user.username = req.body.username;
        }
        if (req.body.subname !== '') {
          user.subname = req.body.subname;
        }
        if (req.body.email !== '') {
          user.email = req.body.email;
        }
        if (req.body.bio !== '') {
          user.bio = req.body.bio;
        }
        if (req.body.image !== null) {
          user.image = req.body.image;
        }
        user.save()
          .then(() => {
            res.status(200).json(user);
          })
          .catch((error) => {
            res.status(400).json({ success: false, msg: error.msg });
          });
      }
    });
  },
  updateUserPassword: (req, res) => {
    User.findOne({
      username: req.params.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Update failed. User not found.' });
      }
      else {
        user.password = req.body.password;
        user.save()
          .then(() => {
            res.status(200).json(user);
          })
          .catch((error) => {
            res.status(400).json({ success: false, msg: error.msg });
          });
      }
    });
  },
};
