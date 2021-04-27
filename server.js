const express = require("express");
const mongoose = require("mongoose");
require("./lib/conn");
const Note = require("./modals/Notes")
const app = express();

const port = process.env.PORT || 8000;

app.get("/api", async (req, res) => {
  const notesData = await Note.find();
  res.send(notesData);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
