var num1 = 10;
var num2 = 4;

var operators = ['+', '-', '*', '/'];

var random = Math.floor(Math.random() * operators.length);
var choosenOperator = operators[random];

switch (choosenOperator) {

  case '+':
    total = num1 + num2;
    console.log(total);
    break;

  case '-':
    total = num1 - num2;
    console.log(total);
    break;

  case '*':
    total = num1 * num2;
    console.log(total);
    break;

  case '/':
    total = num1 / num2;
    console.log(total);
    break;

  default:
    console.log("Invalid Operator");
}