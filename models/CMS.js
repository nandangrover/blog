const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CMSSchema = new Schema({
  user: [{
    type: Array,
    require: true
  }],
  profilePic: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  titleImage: {
    type: String,
    require: true
  },
  articleDesc: {
    type: String,
    require: true
  },
  articleContent: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = CMS = mongoose.model('cms', CMSSchema);