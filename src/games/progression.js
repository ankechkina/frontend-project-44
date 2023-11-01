import startGame from '../index.js';
import getRandomInt from '../helpers.js';

const rules = 'What number is missing in the progression?';

const getNumbersArray = (numbersAmount, firstNumber, interval) => {
  const numbersArray = [];
  let progressionNumber = firstNumber;
  for (let i = 0; i < numbersAmount; i += 1) {
    progressionNumber += interval;
    numbersArray.push(progressionNumber);
  }
  return numbersArray;
};

const generateRound = () => {
  const numbersAmount = getRandomInt(5, 10);
  const firstNumber = getRandomInt(1, 50);
  const interval = getRandomInt(2, 10);
  const numbersArray = getNumbersArray(numbersAmount, firstNumber, interval);
  const removedNumberIndex = getRandomInt(0, numbersArray.length - 1);
  const removedNumber = numbersArray[removedNumberIndex];
  const removedNumberArray = numbersArray;
  removedNumberArray[removedNumberIndex] = '..';
  const userQuestion = removedNumberArray.join(' ');
  const correctAnswer = removedNumber.toString();
  return [userQuestion, correctAnswer];
};

const startProgressionGame = () => startGame(rules, generateRound);

export default startProgressionGame;
