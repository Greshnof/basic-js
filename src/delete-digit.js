const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  s = n.toString();
  let ans = [];
  ans.push(Number(s.slice(1, s.length)))
  for (let i = 1; i < s.length; i++) {
    ans.push(Number(s.slice(0, i) + s.slice(i + 1, s.length)));
  }
  return Math.max(...ans);
}


module.exports = {
  deleteDigit
};
