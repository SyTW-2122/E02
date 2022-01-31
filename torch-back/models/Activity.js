const mongoose = require('mongoose'); // eslint-disable-line
const Schema = mongoose.Schema; // eslint-disable-line

const activitySchema = new Schema({
  author: {
    type: Schema.Types.String,
  },
  activityType: {
    type: Schema.Types.String,
    requires: true,
  },
  title: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  estimatedTime: {
    type: Schema.Types.String,
  },
  likes: {
    type: Schema.Types.Array,
  },
  comments: {
    type: Schema.Types.Array,
  },
  userLike: {
    type: Schema.Types.String,
  },
  userRoutineLike: {
    type: Schema.Types.String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
