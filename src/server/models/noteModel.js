const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  link: { type: String, required: true },
  details: { type: String, required: true },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
