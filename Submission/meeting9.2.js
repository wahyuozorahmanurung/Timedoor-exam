var expectedNumber = 5;
var randomNumber;

do {
  randomNumber = Math.floor(Math.random() * 11);
  console.log(randomNumber);
} while (randomNumber != expectedNumber);

console.log("Stopped! The number is " + randomNumber);