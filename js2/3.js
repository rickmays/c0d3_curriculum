/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 */

const solution = (row, col, i = 0, arr = []) => {
  if (i === row) {
    return arr;
  }
  const colArr = new Array(col).fill(0);
  arr.push(colArr);
  return solution(row, col, i + 1, arr);
};

module.exports = {
  solution,
};
