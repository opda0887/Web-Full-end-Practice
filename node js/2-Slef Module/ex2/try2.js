function count() {
  console.log("1, 2, 3, ...");
}

function minus(n1 = 1, n2 = 1) {
  return n1 - n2;
}

module.exports.count = count;
exports.minus = minus;
