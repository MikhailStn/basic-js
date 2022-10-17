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
     throw new Error("'arr' parameter must be an instance of the Array!");
   }

   let newArr = [];
   let counter = 0;

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] == '--double-next') {
       if (i !== arr.length - 1) {
         newArr[counter] = arr[i + 1];
         counter++;
       }
     } else if (arr[i] == '--discard-next') {
       i = i + 2;
     } else if (arr[i] == '--double-prev') {
       if (i !== 0) {
         if (arr[i - 2] !== '--discard-next') {
           newArr[counter] = arr[i - 1];
           counter++;
         }
       }
     } else if (arr[i] == '--discard-prev') {
       if (counter !== 0) {
         newArr.pop();
         counter--;
       }
     } else {
       newArr[counter] = arr[i];
       counter++;
     }
   }
   return newArr;
 }

module.exports = {
  transform
};
