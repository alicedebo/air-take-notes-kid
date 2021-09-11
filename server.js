//npm inquirered
// https://air-take-notes-kid.herokuapp.com/ 
// https://git.heroku.com/air-take-notes-kid.git
  
// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
