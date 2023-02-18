const express = require("express");
const app = express();

/**
 * middle ware
 * ? can get the file's css
 */
app.use(express.static("public"));

// * To home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// * to mike page
app.get("/mike", (req, res) => {
  res.status(302); // ? set this page to 302
  res.send("302");
});

// ! When not fond page
app.get("*", (req, res) => {
  res.status(404); // * setting the status code to 404
  res.sendFile(__dirname + "/error.html");
});

app.listen(4000, () => {
  console.log("Your are in 4000 port.");
});
