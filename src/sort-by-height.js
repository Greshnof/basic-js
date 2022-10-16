const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function compareNumbers(a, b) {
    return a - b;
  }

  if (!arr.includes(-1)) {
    arr.sort(compareNumbers);
    return arr;
  }
  
  let values = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      values.push(arr[i]);
      arr[i] = 'x';
    }
  }

  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      arr[i] = values.sort(compareNumbers)[x];
      x++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
