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
  return str.replace(/([a-z])\1*/g, (it) => {
    if (it.length > 1) {
      return it.length + it[0]
    } else {
      return it[0]
    }
  })
}

module.exports = {
  encodeLine
};

