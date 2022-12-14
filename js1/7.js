/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a letter,
 *   returns true if the letter exist in the string,
 *   false otherwise
 * @param {string} inp
 * @param {string} letter
 * @returns {boolean}
 */

const solution = (inp, letter, i = 0) => {
  // Base Case
  if (i === inp.length) return false;

  // Recursive Case
  if (inp[i] === letter) {
    return true;
  }
  return solution(inp, letter, i + 1);
};

module.exports = {
  solution,
};