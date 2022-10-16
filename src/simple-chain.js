const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length
  },

  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this
  },

  removeLink(position) {
    if (Number.isInteger(position) && position <= this.chains.length && position > 0) {
      this.chains.splice(position - 1, 1)
    }
    else {
      this.chains = [];
      throw new Error("You can't remove incorrect link!")
    }
    return this;
  },

  reverseChain() {
   this.chains = this.chains.reverse();
   return this
  },

  finishChain() {
    let result = [];
    this.chains.map(el => {
      result.push(el);
    });
    this.chains = []; 
    return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
