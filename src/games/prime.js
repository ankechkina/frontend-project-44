import { getRandomInt, startGame } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
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
