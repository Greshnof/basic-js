const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    let error = new Error("'arr' parameter must be an instance of the Array!");
    throw error;
  }

  let answer = arr.slice();
  
  for (let i = 0; i < arr.length; i++){
    switch (arr[i]) {
      case '--discard-next':
        answer[i] = undefined;
        answer[i+1] = undefined;
        break;
      case '--discard-prev':
        answer[i] = undefined;
        answer[i-1] = undefined;
        break;
      case '--double-next':
        answer[i] = arr[i+1];
        break;
      case '--double-prev':
        answer[i] = answer[i-1];
        break;
    }
  }

  return answer.filter(elem => elem != undefined);
}

module.exports = {
  transform
};
