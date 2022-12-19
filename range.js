// The function takes 3 integer parameters: start, end, and step.
// The function should return an array of numbers from start to end counting by step.

const range = (start, end, stop) => {
  result = [];
  for (let i = start; i <= end; i += stop) {
    result.push(i);
  }
  return result;
};

const range1 = range(0, "hi", 2);

console.log(range1);
