// The function, carPassing(cars, speed), takes in an array of car objects, and the speed of a car as it passes the sensor.
// This function should create a new object with a property called speed, and another property called time and add it to the cars array.

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35,
  },
];

const carPassing = (cars, speed) => {
  const result = [...cars];
  const obj = {
    time: Date.now(),
    speed: speed,
  };
  result.push(obj);
  return result;
};

const speed = 38;

console.log(carPassing(cars, speed));
