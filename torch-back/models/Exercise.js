const mongoose = require('mongoose'); // eslint-disable-line
const Schema = mongoose.Schema; // eslint-disable-line

const exerciseSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  reps: {
    type: Schema.Types.String,
  },
  sets: {
    type: Schema.Types.String,
  },
  status: {
    type: Schema.Types.String,
  },
  image: {
  },
  media: {
  },
}, { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseSchema);