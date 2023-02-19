const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// get user input in the http
app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.render("person.ejs", { name: name }); // ? orcan write: {name}
});

app.listen(1234, () => {
  console.log("You are in 1234 port.");
});
