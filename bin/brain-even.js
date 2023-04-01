#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (number) => {
  let correctAnswer;
  if (number % 2 === 0) {
		 correctAnswer = 'yes';
  } else {
		 correctAnswer = 'no';
  } return correctAnswer;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let randomNumber = getRandomInt(1, 100);
  console.log(`Question: ${randomNumber}`);
  let answer = readlineSync.question('Your answer: ');
  let correctAnswer = isEven(randomNumber);
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
	  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
	  Let's try again, ${userName}!`);
  }
  randomNumber = getRandomInt(1, 100);
  console.log(`Question: ${randomNumber}`);
  answer = readlineSync.question('Your answer: ');
  correctAnswer = isEven(randomNumber);
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
	 console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
	 Let's try again, ${userName}!`);
  }

	 randomNumber = getRandomInt(1, 100);
	 console.log(`Question: ${randomNumber}`);
	 answer = readlineSync.question('Your answer: ');
	 correctAnswer = isEven(randomNumber);
	 if (answer === correctAnswer) {
    console.log(`Congratulations, ${userName}!`);
	 } else {
		 console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
		 Let's try again, ${userName}!`);
	 }
};

brainEven();
