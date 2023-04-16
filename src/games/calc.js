import { getRandomInt } from '../index.js';

const rules = 'What is the result of the expression?';

const getUserQuestion = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);

  const operators = ['+', '-', '*'];
  const randomOperatorIndex = getRandomInt(0, 2);
  const randomOperator = operators[randomOperatorIndex];

  const userQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  return userQuestion;
};

function calculate(expression) {
  let operator = '';
  let num1 = '';
  let num2 = '';

  for (let i = 0; i < expression.length; i += 1) {
    if (
      expression[i] === '+'
      || expression[i] === '-'
      || expression[i] === '*'
    ) {
      operator = expression[i];
      num1 = expression.slice(0, i);
      num2 = expression.slice(i + 1);
      break;
    }
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
}

const generateRound = () => {
  const userQuestion = getUserQuestion();
  const correctAnswer = parseFloat(calculate(userQuestion));
  return [userQuestion, correctAnswer.toString()];
};

export { rules, generateRound };
