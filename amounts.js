const amounts = [61.0, 52.25, 112.99, 5.0];

const forLoop = function () {
  let total = 0;
  for (let i = 0; i < amounts.length; i++) {
    total += amounts[i];
  }
  console.log("Total order is: ", total);
};

forLoop();

const forOfLoop = function () {
  let total = 0;
  for (let i of amounts) {
    total += i;
  }
  console.log("Total order is: ", total);
};

forOfLoop();
