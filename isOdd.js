const isOdd = function (num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
};

const oddChecker = isOdd(14);
console.log(oddChecker);

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
