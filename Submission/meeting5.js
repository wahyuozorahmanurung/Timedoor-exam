// TASK 1 - Positive / Negative

var number = -40;

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("not negative or positive");
}


// TASK 2 - Driver's License

var age = 18;

if (age >= 17) {
  console.log("Eligible for driver's license");
} else {
  console.log("Not eligible for driver's license");
}

// TASK 3 - Student Grades

var grade = 90;

if (grade > 90) {
  console.log("Grade A");
} else if (grade > 75) {
  console.log("Grade B");
} else if (grade > 60) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}


// TASK 4 - Shopping Discount


var totalPayment = 200000;
var member = true;

if (member) {
  totalPayment = totalPayment - (totalPayment * 10 / 100);
}

console.log("Total Payment: " + totalPayment);


// TASK 5 - Choose Player


var choosenPlayer = "Knight";

if (choosenPlayer == "Knight") {
  console.log("Welcome, Knight the hero!");
} else if (choosenPlayer == "Wizard") {
  console.log("Welcome, Wizard the witch!");
} else {
  console.log("Player not found!");
}