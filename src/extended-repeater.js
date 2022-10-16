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
  let result = []
  let arr = []
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1
  let separator = options.hasOwnProperty('separator') ? options.separator : '+'
  let addition = options.hasOwnProperty('addition') ? `${options.addition}` : ''
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|'

  for (j = 0; j < additionRepeatTimes; j++) {
    arr.push(addition);
  }
  for (i = 0; i < repeatTimes; i++) {
    result.push(str+arr.join(`${additionSeparator}`));
  }
  return result.join(`${separator}`);
}

module.exports = {
  repeater
};
