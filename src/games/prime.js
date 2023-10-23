import startGame from '../index.js';
import getRandomInt from '../helpers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let divider = 2;

  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    }

    divider += 1;
  }
  return true;
};

const generateRound = () => {
  const userQuestion = getRandomInt(1, 1000);
  const correctAnswer = isPrime(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

const starPrimeGame = () => startGame(rules, generateRound);

export default starPrimeGame;
