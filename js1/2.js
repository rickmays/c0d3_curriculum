/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   and returns a function.
 * When the returned function is called,
 *   it will return whatever the input function returns
 * When the returned function is called input number of times,
 *   it will return null
 * @param {number} num
 * @param {function} fun
 * @returns {function}
 */

const solution = (num, fun) => {
  return () => {
    if (num <= 0) {
      return null;
    }
    num -= 1;
    return fun();
  };
};

module.exports = {
  solution,
};

// resf = solution(3, () => {
//   return "hello";
// });
// console.log(resf());
// console.log(resf());
// console.log(resf());
// console.log(resf());
// console.log(resf());

resf = solution(1, () => {
  return 100;
});
console.log(resf());
console.log(resf());
console.log(resf());
