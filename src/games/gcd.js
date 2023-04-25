import startGame from '../index.js';
import getRandomInt from '../helpers.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findNod = (num1, num2) => {
  let numberOne = num1;
  let numberTwo = num2;
  while (numberTwo) {
    const temp = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = temp;
  }
  return numberOne;
};

const generateRound = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const userQuestion = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = findNod(randomNumber1, randomNumber2);
  return [userQuestion, correctAnswer.toString()];
};

const startGcdGame = () => startGame(rules, generateRound);

export default startGcdGame;
