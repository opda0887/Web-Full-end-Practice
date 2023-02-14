function sayHi(name) {
  console.log(`Hello, ${name}`);
}

function add(n1 = 1, n2 = 1) {
  return n1 + n2;
}

module.exports.sayHi = sayHi;
exports.add = add;
