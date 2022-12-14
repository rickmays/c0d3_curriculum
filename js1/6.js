/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} num
 * @returns {boolean}
 */

// Non-recursive 
const solution = (num) => {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  if (num < 9) return true;
  if (num % 3 === 0) {
    return false;
  } else return true;
};

//  Recursive
//  const solution = (num, i = 3, limit = Math.floor(Math.sqrt(num))) => {
//   if (num === 2 || num === 3) return true;
//   if (num < 2 || num % 2 === 0) return false;
//   if (num % i === 0) return false;
//   if (i >= limit) return true;
//   return solution(num, i += 2, limit);
//  }

module.exports = {
  solution
}
