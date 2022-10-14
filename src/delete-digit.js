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
  let arr = n.toString().split('');
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
      let arr2 = arr.slice(0)
      arr2.splice(i, 1)
      newArr.push(arr2)
  }

  let arrOfSums = []
  
  for (let i = 0; i < newArr.length; i++) {
      let sum = newArr[i][0]
      for (let j = 0; j < newArr[i].length - 1; j++) {
          sum = sum + newArr[i][j + 1]
      }
      arrOfSums.push(sum)
  }
  return Math.max(...arrOfSums)
}


module.exports = {
  deleteDigit
};
