const getRandomInt = (min = 1, max = 100) => {
  let minNumber = min;
  let maxNumber = max;
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export default getRandomInt;
