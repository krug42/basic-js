const { NotImplementedError } = require("../extensions/index.js");

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
  #direct;

  constructor(direct = true) {
    this.#direct = direct;
  }

  encrypt(msg, key) {
    return this.#transform(msg, key, true);
  }

  decrypt(msg, key) {
    return this.#transform(msg, key, false);
  }

  #transform(msg, key, encryption) {
    if (!msg || !key) throw new Error("Incorrect arguments!");

    let msgArr = msg.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");
    let keyArrIndex = 0;

    let result = msgArr.reduce((acc, char, i) => {
      const charOffset = char.charCodeAt() - 65;
      if (charOffset < 0 || charOffset > 26) return acc + char;

      keyArrIndex = keyArrIndex % keyArr.length;
      const keyOffset = keyArr[keyArrIndex++].charCodeAt() - 65;

      const newCharOffset = encryption
        ? (charOffset + keyOffset) % 26
        : (charOffset - keyOffset + 26) % 26;
      return acc + String.fromCharCode(newCharOffset + 65);
    }, "");

    return this.#direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
