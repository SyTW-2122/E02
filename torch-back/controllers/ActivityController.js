const passport = require('passport');
require('../config/passport')(passport);
// const Exercise = require('../models/Exercise');
const User = require('../models/User');

const mockData = [
  {
    activeUser: 'Ale',
    createDate: '09/01/2022',
    type: 'routine',
    title: 'Rutina de Push',
    description: 'Rutina de Push de tren superior',
    estimatedTime: '50 min',
    likes: ['Laura', 'Eric', 'Vicente', 'Ale'],
    comments: [
      {
        user: 'Laura',
        comment: 'Me ha encantado, ¡Estupenda rutina!',
      },
      {
        user: 'Eric',
        comment: 'Está genial, la incluiré en mis entrenamientos',
      },
      {
        user: 'Vicente',
        comment: '¡Sigue así!',
      },
    ],
    userLike: '',
    routineUserLiked: '',
    image: 'https://cdn.fitclans.com/exercises/iamstipke/group-cover.jpg.1080w.jpg',
  },
  {
    activeUser: '',
    createDate: '',
    type: 'like',
    title: '',
    description: 'le ha gustado la rutina de',
    estimatedTime: '',
    likes: [],
    comments: [],
    userLike: 'Laura',
    routineUserLiked: 'Eric',
  },
  {
    activeUser: 'Vicente',
    createDate: '09/01/2022',
    type: 'routine',
    title: 'Rutina de Pierna',
    description: 'Rutina de tren inferior',
    estimatedTime: '60 min',
    likes: ['Eric', 'Laura', 'Vicente', 'Ale'],
    comments: [
      {
        user: 'Laura',
        comment: '¡Estupenda rutina!',
      },
      {
        user: 'Eric',
        comment: 'Buff... durísima rutina',
      },
      {
        user: 'Ale',
        comment: 'No siento las piernas!',
      },
    ],
    userLike: '',
    routineUserLiked: '',
    image: 'https://cdn.kingsbox.com/assets/media/products/bars-plates/props-accessories/squat-ramp/KB09RI-029--kingsbox-squat-ramp--2.jpg',
  },
  {
    activeUser: '',
    createDate: '',
    type: 'like',
    title: '',
    description: 'le ha gustado la rutina de',
    estimatedTime: '',
    likes: [],
    comments: [],
    userLike: 'Ale',
    routineUserLiked: 'Laura',
  },
];

module.exports = {

  getAllActivities: (req, res) => {
    User.find({
      username: req.params.username,
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'Update failed. User not found.' });
      }
      else {
        res.status(200).send(mockData);
      }
    });
  },
};
