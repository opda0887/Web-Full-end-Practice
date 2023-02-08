/**
 * prototype
 * 使用方式：constructionFunctionName.prototype.函式名稱 = function() {...}
 */

function Student(name, score) {
  this.name = name;
  this.score = score;
}

Student.prototype.printeScore = function () {
  console.log(this.name, "gets", this.score);
};

let Peter = new Student("Peter", 95);
let May = new Student("May", 69);

// console.log(Peter);
Peter.printeScore();
console.log(Peter.printeScore === May.printeScore);
