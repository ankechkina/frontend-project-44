import { getRandomInt } from '../index.js';

const rules = 'What is the result of the expression?';

const generateRound = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = getRandomInt(0, 2);
  const randomOperator = operators[randomOperatorIndex];
  const userQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = eval(userQuestion);
  return [userQuestion, correctAnswer];
};

export { rules, generateRound };
