let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody"; // reassign ของ local เอง
  console.log(message); // * = Hello everybody
}

logMessage(message);
console.log(message); // ** = Welcome to Thailand

let name = "John";

function sayHi(input) {
  console.log(name); // ***
  name = input;
}

sayHi();
console.log(name);
