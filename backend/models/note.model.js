const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: String,
  note: String
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports = { NoteModel };
