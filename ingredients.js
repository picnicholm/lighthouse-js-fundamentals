const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:
const whilePrinter = () => {
  let i = 0;
  while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
  }
};

// whilePrinter();
// Write a for loop that prints out the contents of ingredients:
const forPrinter = () => {
  for (let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
  }
};

// forPrinter();
// Write any loop (while or for) that prints out the contents of ingredients backwards:

const reverseWhilePrinter = () => {
  let i = 0;
  while (i < ingredients.reverse().length) {
    console.log(ingredients[i]);
    i++;
  }
};

// reverseWhilePrinter();

const reverseForPrinter = () => {
  for (let i = 0; i < ingredients.reverse().length; i++) {
    console.log(ingredients[i]);
  }
};
reverseForPrinter();
