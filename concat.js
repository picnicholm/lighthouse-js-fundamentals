// The function should, when given two arrays, concatenate the arrays together.

const concat = (arr1, arr2) => {
  for (let element of arr2) arr1.push(element);
  return arr1;
};

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);

console.log("****************************************************************");

const concat2 = (arr1, arr2) => arr1.concat(arr2);

console.log(concat2([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat2([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat2([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat2([5, 10], []), "=?", [5, 10]);
