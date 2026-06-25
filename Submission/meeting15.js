const prompt = require('prompt-sync')();

// Step 1
var random = Math.floor(Math.random() * 10);

var adjectives = [
  "Smart",
  "Brave",
  "Happy",
  "Fast",
  "Cool",
  "Strong",
  "Lucky",
  "Funny",
  "Kind",
  "Bright"
];

var nouns = [
  "Tiger",
  "Lion",
  "Eagle",
  "Dragon",
  "Wolf",
  "Panda",
  "Shark",
  "Falcon",
  "Rabbit",
  "Bear"
];

var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "?",
  "+"
];

var newUsername = "";
var newPassword = "";

// Step 2
function generate(option) {
  if (option === 1) {
    newUsername = adjectives[random] + nouns[random];

    console.log("\n=== GENERATED USERNAME ===");
    console.log(newUsername);
  } 
  else if (option === 2) {
    newPassword =
      adjectives[random].toUpperCase() +
      nouns[random] +
      random +
      symbols[random];

    console.log("\n=== GENERATED PASSWORD ===");
    console.log(newPassword);
  }
}

// Step 3
var userOption;

do {
  userOption = Number(
    prompt(
      "\nChoose an option:\n1. Generate Username\n2. Generate Password\nEnter your choice: "
    )
  );

  if (userOption !== 1 && userOption !== 2) {
    console.log("Invalid option! Please enter 1 or 2.");
  }

} while (userOption !== 1 && userOption !== 2);

generate(userOption);