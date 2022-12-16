const isEven = function (num) {
  let result = num;
  if (num % 2 === 0) {
    return result;
  } else {
    return "Your number is odd";
  }
};

console.log(isEven(13));
