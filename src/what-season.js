const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 function getSeason(date) {
   let seasons = [
     "winter",
     "spring",
     "summer",
     "autumn",
   ];

   if (!date) {
     return "Unable to determine the time of year!";
   } else if (date instanceof Date == false) {
     throw Error("Invalid date!");
   } else if (Object.getOwnPropertyNames(date).length > 0) {
     throw Error("Invalid date!");
   }

   let month = date.getMonth();

   switch (month) {
     case 0:
       return seasons[0];
     case 1:
       return seasons[0];
     case 2:
       return seasons[1];
     case 3:
       return seasons[1];
     case 4:
       return seasons[1];
     case 5:
       return seasons[2];
     case 6:
       return seasons[2];
     case 7:
       return seasons[2];
     case 8:
       return seasons[3];
     case 9:
       return seasons[3];
     case 10:
       return seasons[3];
     case 11:
       return seasons[0];
   }
 }

module.exports = {
  getSeason
};
