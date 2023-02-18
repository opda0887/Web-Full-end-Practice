const express = require("express");
const app = express(); // 這裡require後就直接執行

const bodyParser = require("body-parser");

// ! middleware: get the body element
app.use(bodyParser.urlencoded({ extended: true }));

// handle different request
app.get("/", (req, res) => {
  // open an html as the home page
  res.sendFile(__dirname + "/index.html");
});

app.get("/peter", (req, res) => {
  res.send("Peter enter in the page.");
});

app.get("/mike", (req, res) => {
  res.send("Mike enter");
});

/**
 * routing for patterns
 * * use " : "      to get the user input on http
 * * use " params " to get the object(http elements) from request
 */
app.get("/fruit/:someFruit", (req, res) => {
  let { someFruit } = req.params;
  res.send("You want " + someFruit);
});

/**
 * routing for query
 * ? get the form value
 */
app.post("/formHandling", (req, res) => {
  let { name, age } = req.body; // ? get the form value after user submit
  res.send("Thanks for your post. " + name + age);
});
// app.get("/formHandling", (req, res) => {
//   let { name, age } = req.query;
//   res.send("Thanks for your post. " + name + age);
// });

/**
 * routing for all
 * * use " * "
 * ? working when someone get into the wrong page
 * ! must write after all the requests
 */
app.get("*", (req, res) => {
  res.send("Cannot find what you want.");
});

app.listen(3000, () => {
  console.log("You are in 3000.");
});
