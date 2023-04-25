import startGame from '../index.js';
import getRandomInt from '../helpers.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const isEven = (num) => num % 2 === 0;
  const userQuestion = getRandomInt(1, 100);
  const correctAnswer = isEven(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

const startEvenGame = () => startGame(rules, generateRound);

export default startEvenGame;
