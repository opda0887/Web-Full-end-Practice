const express = require("express");
const app = express();
const ejs = require("ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  // deal with objects in array
  const students = [
    { name: "Peter", age: 1, gender: "female", score: 100 },
    { name: "May", age: 1, gender: "male", score: 15 },
    { name: "Wang", age: 1, gender: "female", score: 90 },
    { name: "Kiwi", age: 1, gender: "male", score: 74 },
  ];
  res.render("index.ejs", { students });
});

// get the form value
app.get("/response", (req, res) => {
  let { name1, age1 } = req.query;
  console.log(name1, age1);
  res.render("formAns.ejs", { name1: name1, age1: age1 });
});

// get user input in the http
app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.render("person.ejs", { name: name }); // ? orcan write: {name}
});

app.listen(1234, () => {
  console.log("You are in 1234 port.");
});
