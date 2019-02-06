const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ImagesSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Image = mongoose.model('images', ImagesSchema);