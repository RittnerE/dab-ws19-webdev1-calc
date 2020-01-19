/**
 * Reverse Polish Notation Calculator
 */

var arguments = process.argv.slice(2);

var operand1 = parseFloat(arguments[0]);
var operand2 = parseFloat(arguments[1]);

var operator = arguments[2];

const operators = ["+","-","*","/"];

if(!isNaN(operand1) && !isNaN(operand2) && operators.includes(operator)) {

  console.log('Calculating:', operand1, operand2, operator);

  var result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      console.error('Not implemented:', operator);
  }

  console.log('Result:', result);
}else {
  console.log("please use correct syntax ( number number operator)");
}
