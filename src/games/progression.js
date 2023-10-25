import startGame from '../index.js';
import getRandomInt from '../helpers.js';

const rules = 'What number is missing in the progression?';

const getLastNumber = (firstNumber, numbersAmount, interval) => {
  let i = 0;
  let lastNumber = firstNumber;
  while (i < numbersAmount) {
    lastNumber += interval;
    i += 1;
  }
  return lastNumber;
};

const getNumbersArray = () => {
  const numbersAmount = getRandomInt(5, 10);
  const firstNumber = getRandomInt(1, 50);
  const interval = getRandomInt(2, 10);
  const lastNumber = getLastNumber(firstNumber, numbersAmount, interval);
  const removedNumberPlace = getRandomInt(1, numbersAmount);
  const numbersArray = [];
  for (let i = firstNumber; i <= lastNumber; i += interval) {
    numbersArray.push(i);
  }
  return [numbersArray, removedNumberPlace];
};

const getRemovedNumberArray = () => {
  const [numbersArray, removedNumberPlace] = getNumbersArray();
  const removedNumber = numbersArray[removedNumberPlace - 1];
  const removedNumberArray = [];
  for (let i = 0; i < numbersArray.length; i += 1) {
    if (numbersArray[i] === removedNumber) {
      removedNumberArray.push('..');
    } else {
      removedNumberArray.push(numbersArray[i]);
    }
  }
  return [removedNumberArray, removedNumber];
};

const generateRound = () => {
  const [removedNumberArray, removedNumber] = getRemovedNumberArray();
  const userQuestion = removedNumberArray.join(' ');
  const correctAnswer = removedNumber.toString();
  return [userQuestion, correctAnswer];
};

const startProgressionGame = () => startGame(rules, generateRound);

export default startProgressionGame;
