const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let ans = '';
    
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i+1]) {
      counter += 1
    } else if ((str[i] != str[i+1]) && (counter == 1)) {
      ans += str[i];
    } else {
      ans += counter + str[i];
      counter = 1;
    }
  }
  return ans;
}

module.exports = {
  encodeLine
};
