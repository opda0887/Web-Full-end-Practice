const http = require("http");
const fs = require("fs");
const path = require("path");

/**
 * path.join: 將檔案名稱組合起來
 */

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) throw err;

      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000, () => {
  console.log(__dirname); // ? x:\Users\林聖隆\Desktop\程式碼資料夾\2021線上課程\node js\4-node server - will be printed
  console.log("You are in port 8000.");
});
