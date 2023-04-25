import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [userQuestion, correctAnswer] = generateRound();
    console.log(`Question: ${userQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer && i === 2) {
      console.log(`Congratulations, ${userName}!`);
    } else if (userAnswer === correctAnswer && i < 2) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default startGame;
