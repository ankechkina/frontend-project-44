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

const getStringOfNumbers = () => {
  const numbersAmount = getRandomInt(5, 10);
  const firstNumber = getRandomInt(1, 50);
  const interval = getRandomInt(2, 10);
  const lastNumber = getLastNumber(firstNumber, numbersAmount, interval);
  const removedNumberPlace = getRandomInt(1, numbersAmount);
  let i = firstNumber;
  let wholeStringOfNumbers = '';
  while (i <= lastNumber) {
    wholeStringOfNumbers = `${wholeStringOfNumbers} ${i}`;
    i += interval;
  }
  wholeStringOfNumbers = wholeStringOfNumbers.trim();
  return [wholeStringOfNumbers, removedNumberPlace];
};

const getRemovedNumberArray = () => {
  const [wholeStringOfNumbers, removedNumberPlace] = getStringOfNumbers();
  const separator = ' ';
  const separatedNumbers = wholeStringOfNumbers.split(separator);
  const removedNumber = separatedNumbers[removedNumberPlace - 1];
  const removedNumberArray = [];
  for (let i = 0; i < separatedNumbers.length; i += 1) {
    if (separatedNumbers[i] === removedNumber) {
      removedNumberArray.push('..');
    } else {
      removedNumberArray.push(separatedNumbers[i]);
    }
  }
  return [removedNumberArray, removedNumber];
};

const generateRound = () => {
  const [removedNumberArray, removedNumber] = getRemovedNumberArray();
  const userQuestion = removedNumberArray.join(' ');
  const correctAnswer = removedNumber;
  return [userQuestion, correctAnswer];
};

const startProgressionGame = () => startGame(rules, generateRound);

export default startProgressionGame;
