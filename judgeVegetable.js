// Our function will receive two parameters:
// a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).
// Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

const judgeVegetable = function (vegetables, metric) {
  let topRank = 0;
  let submitter = "";
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] >= topRank) {
      topRank = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter;
};

console.log(judgeVegetable(vegetables, metric));
console.log(judgeVegetable1(vegetables, metric));
