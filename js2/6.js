/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time, i = 0) => {
  const intervalId = setInterval(() => {
    arr[i]();
    i++;
    if (i === arr.length) {
      clearInterval(intervalId)
    }
  }, time);
};

module.exports = {
  solution,
};
