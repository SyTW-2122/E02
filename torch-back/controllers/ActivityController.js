const passport = require('passport');
require('../config/passport')(passport);
// const Exercise = require('../models/Exercise');

const mockData = [
  {
    activeUser: 'Ale',
    createDate: '12/01/2020',
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
  },
  {
    activeUser: '',
    createDate: '',
    type: 'like',
    title: '',
    description: 'le ha gustado la rutida de',
    estimatedTime: '',
    likes: [],
    comments: [],
    userLike: 'Laura',
    routineUserLiked: 'Eric',
  },
  {
    activeUser: 'Vicente',
    createDate: '12/01/2020',
    type: 'routine',
    title: 'Rutina de Pierna',
    description: 'Rutina de tren inferior',
    estimatedTime: '60 min',
    likes: ['Laura', 'Eric', 'Vicente', 'Ale'],
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
  },
];

module.exports = {

  getAllActivities: (req, res) => {
    res.status(200).send(mockData);
  },
};
