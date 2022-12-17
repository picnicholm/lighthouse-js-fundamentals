// name – a string representing someone's name
// yearOfBirth – a number representing their year of birth
// currentYear – a number representing the current year

const ageCalc = function (name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
};

console.log(ageCalc("Miranda", 1983, 2015));
console.log(ageCalc("Ferdinand", 1988, 2015));
