const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = String(str);
  let ans = '';
  let addition = '';
  let separator = '+';
  let additionSeparator = '|';
  
  if (options.separator) {
    separator = options.separator;
  }
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  }
  
  if (options.addition && !options.additionRepeatTimes) {
    addition = String(options.addition)
    if (options.additionSeparator && options.additionRepeatTimes) {
      addition += additionSeparator;
    }
  }
  
  if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        addition += String(options.addition) + additionSeparator;
      }
      addition = addition.slice(0,addition.length - additionSeparator.length)
  }
  
  for (let i = 0; i < options.repeatTimes; i++) {
    ans += str + addition + separator;
  }
  ans = ans.slice(0, ans.length - separator.length);

  if(!options.repeatTimes) {
    ans = str + addition;
  }
  
  return ans;
}
module.exports = {
  repeater
};
