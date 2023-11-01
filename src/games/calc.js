import startGame from '../index.js';
import getRandomInt from '../helpers.js';

const rules = 'What is the result of the expression?';

const calculate = ([num1, operator, num2]) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
};

const getUserQuestion = () => {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();
  const operators = ['+', '-', '*'];
  const operatorsCount = operators.length;
  const randomOperatorIndex = getRandomInt(0, operatorsCount - 1);
  const randomOperator = operators[randomOperatorIndex];
  const userQuestionArray = [randomNumber1, randomOperator, randomNumber2];
  return userQuestionArray;
};

const generateRound = () => {
  const userQuestionArray = getUserQuestion();
  const userQuestion = userQuestionArray.join(' ');
  const correctAnswer = calculate(userQuestionArray);
  return [userQuestion, correctAnswer.toString()];
};

const startCalcGame = () => startGame(rules, generateRound);

export default startCalcGame;
