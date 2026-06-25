const readline = require('readline-sync');

const questions = [
  "What is the capital of Indonesia?",
  "Which country is famous for the Eiffel Tower?",
  "What is the largest country in the world by land area?",
  "Which country is known as the Land of the Rising Sun?",
  "What is the capital of Australia?"
];

const answerKeys = [
  "Jakarta",
  "France",
  "Russia",
  "Japan",
  "Canberra"
];

let score = 0;
let currentQuestionIndex = 0;

while (currentQuestionIndex < questions.length) {
  let userAnswer = readline.question(questions[currentQuestionIndex] + "\nAnswer: ");
  
  if (userAnswer !== null && userAnswer.trim().toLowerCase() === answerKeys[currentQuestionIndex].toLowerCase()) {
    score += 20;
  }
  
  currentQuestionIndex++;
}

console.log("Your final score is: " + score);