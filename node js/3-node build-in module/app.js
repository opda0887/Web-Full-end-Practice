/**
 * ! The build-in module intro
 */

/**
 * ? path
 * * extname: 回傳檔案類型
 * * basename: 將__filename中的__dirname去掉
 */
const path = require("path");
console.log(path.extname(__filename)); // .js - will be printed
console.log(path.basename(__filename)); // app.js - will be printed

/**
 * ? url
 * * parse: 拆解url，使其更容易被分析
 * * host: 得到網址的host
 * * query: 得到網址的後半段，形成一個object
 */
const url = require("url");
const theLink =
  "https://www.abc.com/user/12345/photo?from=20180101&to=20201231#favorite";

let link = url.parse(theLink, true);

console.log(link.host); // www.abc.com - will be printed
console.log(link.query); // [Object: null prototype] { from: '20180101', to: '20201231' } - will be printed

/**
 * ? fs: 當出現Error時，可搭配使用的module
 * * write: (檔案名稱, 文字, function) - 建立/打開文件，並寫入資訊
 * * readFile: (檔案名稱, 文字解析器, function) - 閱讀文件內容
 */

const fs = require("fs");

fs.writeFile("message.txt", "Hello!", (e) => {
  if (e) throw e; // ! 若有Error，則執行

  console.log("Written in file");
});

fs.readFile("./message.txt", "utf8", (e, data) => {
  if (e) throw e;

  console.log(data); // Hello! - will be printed
});
