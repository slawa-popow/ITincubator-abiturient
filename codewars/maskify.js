/**
 * Ваша задача — написать функцию maskify, 
 * которая заменяет все символы, кроме последних четырех, на '#'.

  Примеры
  maskify("4556364607935616") == "############5616"
  maskify(     "64607935616") ==      "#######5616"
  maskify(               "1") ==                "1"
  maskify(                "") ==                 ""
 */


  class MaskCode {
    constructor(maskSymbol, capacity=4) {
      this.maskSymbol = maskSymbol || '#';
      this.cap = capacity;
    }
  
    /**
     * @param {string} msg 
     * @returns {Array}
     */
    getAllowedSym(msg) {
      let resSlice = '';  // видимые символы
      let rest = '';      // решетки
      if (msg.length > this.cap) {
        rest = this.maskSymbol.repeat(msg.length - this.cap);
        resSlice = msg.slice(msg.length - this.cap);
      } else if (msg.length <= this.cap) {
        resSlice = msg;
      } 
  
      return [rest, resSlice];
    } 
  
  
    /**
     * @param {string} msg 
     * @returns {string}
     */
    getMask(msg) {
      return this.getAllowedSym(msg).join('');
    }
  }
  
  
  
  // return masked string
  function maskify(cc) {
    const msk = new MaskCode('#');
  
    return msk.getMask(cc);
  }