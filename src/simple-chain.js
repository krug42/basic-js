const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chainArr: [],
  getLength() {
    return this._chainArr.length;
  },
  addLink(value = "") {
    this._chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this._chainArr[position - 1]) {
      this._chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this._chainArr = this._chainArr.filter((cur, i) => i !== position - 1);
    return this;
  },
  reverseChain() {
    this._chainArr.reverse();
    return this;
  },
  finishChain() {
    const result = Array.from(this._chainArr);
    this._chainArr = [];
    return result.join("~~");
  },
};

module.exports = {
  chainMaker,
};
