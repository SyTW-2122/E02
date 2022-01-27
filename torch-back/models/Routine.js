const mongoose = require('mongoose'); // eslint-disable-line
const Schema = mongoose.Schema; // eslint-disable-line

const routineSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  author: {
    type: Schema.Types.String,
  },
  authorid: {
    type: Schema.Types.String,
  },
  ratings: {
    type: Schema.Types.Array,
  },
  comments: {
    type: Schema.Types.Array,
  },
  image: {
  },
  description: {
    type: Schema.Types.String,
  },
  likes: {
    type: Schema.Types.Array,
  },
  exercises: {
    type: Schema.Types.Array,
  },
}, { timestamps: true });

module.exports = mongoose.model('Routine', routineSchema);
