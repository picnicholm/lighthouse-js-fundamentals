const rectangleArea = (l, w) =>
  l > 0 && w > 0 ? l * w : "input values must be positive";
console.log(rectangleArea(-2, 3));

const triangleArea = (b, h) =>
  b > 0 && h > 0 ? b * h : "input values must be positive";
console.log(triangleArea(-2, 2));

const circleArea = (radius) =>
  radius > 0 ? Math.PI * Math.pow(radius, 2) : "input values must be positive";
console.log(circleArea(-1));
