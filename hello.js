const sayHello = function (name) {
  console.log("Hello, " + name);
};

sayHello("Nick");
sayHello("Kaz");
sayHello("Bonita");
sayHello("Clarice");

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
};

sayHelloToConsole("Gilly");

const returnSayHello = function (name) {
  return "Hello, " + name;
};

const greeting = returnSayHello("Pink Champagne");
console.log(greeting);
