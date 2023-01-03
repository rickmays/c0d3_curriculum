/**
 * Write a function called solution that
 *   Takes in a number
 *   returns an array with the length equal to the input number
 *
 * Every element in the array must numbered with the correct index:
 *   0,1,2,3,4...
 * @param {number} num
 * @returns {array}
 */

const solution = (num, arr = [], i = 0) => {
  if (i >= num) {
    return arr;
  }
  arr.push(i);
  return solution(num, arr, i + 1);
};

module.exports = {
  solution,
};
