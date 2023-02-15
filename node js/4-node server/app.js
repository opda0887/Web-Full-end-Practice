// * import: http module

const http = require("http");
const url = require("url");

/**
 * http.createServer((req, res)
 * createServer: 建立本地端server
 * req: 使用者像伺服器的request，是一個object
 * res: 伺服器所做出的response，可影響網頁的顯示內容
 * res.write: 在伺服器中的網頁寫入...
 * res.end: 停止寫入
 */
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>You are in the home page</h1>");
    res.end();
  } else {
    let path = url.parse(req.url);
    res.write("You are in page:" + path.pathname);
    res.end();
  }
});

/**
 * server.listen(port, function)
 * port: 在瀏覽器中輸入：localhost:9487之後，便會來到伺服器的網頁
 * function: 來到網頁之後要在城市裏面做......
 */
server.listen(9487, () => {
  console.log("Your are in server 9487.");
});
