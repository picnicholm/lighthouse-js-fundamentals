// The first argument, trash, is a string that will tell our function what type of item is being submitted.
// The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.

const trash1 = "recycling";
const bins1 = { waste: 4, recycling: 2, compost: 5 };

const smartGarbage = (trash, bins) => {
  const keys = Object.keys(bins);
  for (let name of keys) {
    if (trash === name) {
      bins[name] += 1;
    }
  }
  return bins;
};

console.log(smartGarbage(trash1, bins1));
