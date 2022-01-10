const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema({
  sportName: {
    type: Schema.Types.String,
    required: true,
  },
  image: {
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  publicationDate: {
    type: Schema.Types.Date,
  },
  userWhoDiIt: {
    type: Schema.Types.String,
    required: true,
  },
  valoration: {
    type: Schema.Types.Number,
    required: true,
  },
  comments: {
    type: Schema.Types.Array,
  },
  done: {
    type: Schema.Types.Boolean,
  },
}, { timestamps: true });

module.exports = mongoose.model('Routine', routineSchema);