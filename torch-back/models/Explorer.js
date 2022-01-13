const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const explorerSchema = new Schema({
  user: {
    type: Schema.Types.Array,
  },
  routines: {
    type: Schema.Types.Array,
  },
}, { timestamps: true });

module.exports = mongoose.model('Explorer', explorerSchema);