import { getRandomInt } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findNod = (num1, num2) => {
  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};
const generateRound = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const userQuestion = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = findNod(randomNumber1, randomNumber2);
  return [userQuestion, correctAnswer];
};
export { rules, generateRound };
