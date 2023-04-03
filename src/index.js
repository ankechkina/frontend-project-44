// общая логика игр

const checkAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
   Let's try again, ${userName}!`);
  }
};
