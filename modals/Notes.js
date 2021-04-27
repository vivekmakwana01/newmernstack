const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Export Note model
var Note = (module.exports = mongoose.model("note", noteSchema));
