const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct = true) {
      this.direct = direct;
      this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.error = 'Incorrect arguments!';
  }
  converter(message, keyword, encrypt = true) {
      if (!message || !keyword) {
          throw new Error(this.error);
      } else {
          const messageArr = message.toUpperCase().split('');
          const key = keyword.repeat(Math.ceil(message.length / keyword.length)).toUpperCase()
          let i = 0;
          const newMessage = messageArr.reduce((resultMessage, currentLetter) => {
              if (this.alpha.includes(currentLetter)) {
                  const currentIndex = this.alpha.indexOf(key[i++]);
                  const newAlpha =`${this.alpha.slice(currentIndex)}${this.alpha.slice(0, currentIndex)}`;
                  return encrypt ?
                      `${resultMessage}${newAlpha[this.alpha.indexOf(currentLetter)]}`:
                      `${resultMessage}${this.alpha[newAlpha.indexOf(currentLetter)]}`;
              } else {
                  return `${resultMessage}${currentLetter}`;
              }
          }, '');

          return this.direct ? newMessage : newMessage.split('').reverse().join('');
      }
  }
  encrypt = (message, keyword) => this.converter(message, keyword);
  decrypt = (message, keyword) => this.converter(message, keyword, false);
}

module.exports = {
  VigenereCipheringMachine
};
