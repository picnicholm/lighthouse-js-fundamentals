//ugly and overly complicated

// const lastIndexOf = function (array, value) {
//   for (let i = array.length - 1; i >= -1; i--) {
//     if (array[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// };

// clean and crisp, easy to understand

const last = (arr, val) => arr.lastIndexOf(val);

console.log(last([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(last([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(last([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(last([5, 5, 5], 5), "=?", 2);
console.log(last([], 3), "=?", -1);
