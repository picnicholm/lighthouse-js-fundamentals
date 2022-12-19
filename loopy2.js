// range should be an array of 2 numbers representing the start and end values for the loop.
// multiples should be an array of 2 numbers representing the multiples you want to replace with words.
// words should be an array of 2 strings representing the words that will replace the multiples.

// const loopyLighthouse = ([start, end], [num1, num2], [word1, word2]) => {
//   for (let i = start; i <= end; i++) {
//     if (i % num1 === 0) {
//       console.log(word1);
//     }
//     if (i % num2 === 0) {
//       console.log(word2);
//     }
//     if (i % num1 === 0 && i % num2 === 0) {
//       console.log(word1, word2);
//     } else {
//       console.log(i);
//     }
//   }
// };

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

// const loopyLighthouse = (range, multiples, words) => {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else {
//       console.log(i);
//     }
//   }
// };

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = "";
    if (i % multiples[0] === 0) {
      output += words[0];
    }
    if (i % multiples[1] === 0) {
      output += words[1];
    }
    console.log(output === "" ? i : output);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
