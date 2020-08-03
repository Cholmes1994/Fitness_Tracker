// Require npm packages and external files
const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Use routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//Listen on Port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});