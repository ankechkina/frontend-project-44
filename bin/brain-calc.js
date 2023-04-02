#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);

  const operators = ['+', '-', '*'];
  const randomOperatorIndex = getRandomInt(0, 2);
  const randomOperator = operators[randomOperatorIndex];

  console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
  const answer = readlineSync.question('Your answer: ');

  const getCalculationString = (num1, operator, num2) => {
    const result = `${num1} ${operator} ${num2}`;
    return result;
  };

  const calculationString = getCalculationString(
    randomNumber1,
    randomOperator,
    randomNumber2,
  );
  const correctAnswer = eval(calculationString);

  if (answer == correctAnswer) {
    console.log(`Correct!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${userName}!`);
  }
};

brainCalc();
