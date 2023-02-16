const express = require("express");
const app = express(); // 這裡require後就直接執行

app.get("/", (req, res) => {
  res.send("You are in the home page.");
});

app.listen(3000, () => {
  console.log("You are in 3000.");
});
