const raining = true;
// const cold = true;

// if (raining) {
//   console.log("Make sure to bring an umbrella!");
// }

// if (cold) {
//   console.log("Make sure to wear a scarf!");
// }

// console.log("Now you're ready to go outside.");

// const cold = false;

// if (cold) {
//   console.log("Make sure to wear a scarf!");
// } else {
//   console.log("Short sleeves are fine.");
// }

const temp = 12;

if (temp < 0) {
  console.log("Make sure to wear a scarf!");
} else if (temp < 15) {
  console.log("Short sleeves won't cut it.");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside.");

const isCitizen = true;
const age = 14;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You aren't eligable to vote.");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

if (temp < -40 || temp > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
