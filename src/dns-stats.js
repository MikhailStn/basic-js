const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 const getDNSStats = (domains) => {
   let res = {};
   let newArr = [];
   let arr1 = [];

   for (let i = 0; i < domains.length; i++) {
     arr1.push(domains[i].split(".").reverse());
   }
   for (let i = 0; i < arr1.length; i++) {
     let str = "";
     for (let j = 0; j < arr1[i].length; j++) {
       str = str + `.${arr1[i][j]}`;
       if (newArr.includes(str)) {
         res[str] = res[str] + 1;
       } else {
         res[str] = 1;
         newArr.push(str);
       }
     }
   }
   return res;
 };


module.exports = {
  getDNSStats
};
