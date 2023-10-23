import startGame from '../index.js';
import getRandomInt from '../helpers.js';

const rules = 'What is the result of the expression?';

const calculate = (expression) => {
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
};

const generateRound = () => {
  const getUserQuestion = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const operators = ['+', '-', '*'];
    const randomOperatorIndex = getRandomInt(0, 2);
    const randomOperator = operators[randomOperatorIndex];
    const userQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    return userQuestion;
  };
  const userQuestion = getUserQuestion();
  const correctAnswer = calculate(userQuestion);
  return [userQuestion, correctAnswer.toString()];
};

const startCalcGame = () => startGame(rules, generateRound);

export default startCalcGame;
