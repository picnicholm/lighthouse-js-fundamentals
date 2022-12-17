const packingList = [
  "bowls",
  "plates",
  "pots",
  "pans",
  "eating utensils",
  "glasses",
  "cups",
  "cooking utensils",
];

console.log("Kitchen stuff to pack:");

const packingListPrinter1 = function () {
  for (let i = 0; i < packingList.length; i++) {
    console.log(packingList[i]);
  }
};

packingListPrinter1();

const packingListPrinter2 = () => {
  let i = 0;
  while (i < packingList.length) {
    console.log(packingList[i]);
    i++;
  }
};

packingListPrinter2();
