// Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
  ["Big Al Pizza", 50, "restaurant"],
];

const chooseStations = function (stations) {
  let result = [];

  for (let station of stations) {
    const capacity = station[1];
    const venue = station[2];

    if (
      (capacity >= 20 && venue === "school") ||
      venue === "community centre"
    ) {
      result.push(station[0]);
    }
  }
  return result;
};

const votingStations = chooseStations(stations);

console.log(votingStations);
