
/**
 * Вам будет дано число, и вам нужно будет вернуть его 
 * в виде строки в развернутом виде:
 * 
 * expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
 * expanded_from(1.24); // should return "1 + 2/10 + 4/100"
 * expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
 * expanded_from(0.04); // should return "4/100"
 * 
 */



class ExpandedForm {
    // длинна числа : диапазон
    static range = {
      1: 1,
      2: 10,
      3: 100,
      4: 1000,
      5: 10000,
      6: 100000
    };
  

    /**
     * @constructor
     * @param {float} _num 
     * 
     * Преобразовать дробное число в строку,
     * затем разбить в массив, затем присвоить массив
     * this.int - строка. Челая часть числа
     * this.fract - строка. Дробная часть числа
     */
    constructor(_num) {
      this.num = ('' + _num).split('.');
      [this.int, this.fract] = this.num;
    }
  
    getResult() {
      let int = this.getIntPart();
      let fract = this.getFractPart();
      return (+this.int !== 0 ) ? int + ' + ' + fract : fract  ;
    }
  

    /**
     * 
     * @returns {string}
     * 
     * Преобразовать целую часть числа в строковой форме
     */
    getIntPart() {
      let rangePart = ExpandedForm.range[this.int.length];
      let nums = [...this.int];
      let result = '';
      let strOperator = ' + ';
      
      for (let i = 0; i < nums.length; i += 1, rangePart /= 10) {
        let calc = +nums[i] * rangePart;
        if (calc === 0) { continue; }
        if (i === nums.length - 1) { strOperator = ''; }
        result += `${calc}` + strOperator;  
      }
  
      return this.trimEndOperator(result, strOperator);
    }
  
  
    /**
     * 
     * @returns {string}
     * 
     * Преобразовать дробную часть числа в строковой форме.
     * отличается от getIntPart()
     */
    getFractPart() {
      // debugger;
      let rangePart = ExpandedForm.range[this.fract.length] * 10;
      let nums = [...this.fract];
      let result = '';
      let strOperator = '/';
  
      for (let i = 0, rangeFract = 10; i < nums.length; i += 1, rangeFract *= 10) {
        let calc = +nums[i] * rangeFract;
        if (calc === 0) {rangePart /= 10; continue; }
        result += `${nums[i]}` + strOperator + `${rangeFract} + `;  
      }
  
      return this.trimEndOperator(result, ' + ');
    }
  
  
    /**
     * 
     * @param {string} str 
     * @param {string} strOperator 
     * @returns {string}
     * 
     * Если в конце строки есть strOperator 
     * например 100 + 30 + 2 +
     * то обрезать его.
     */
    trimEndOperator(str, strOperator) {
      return (str.endsWith(strOperator)) ? 
          str.slice(0, str.lastIndexOf(strOperator)) : str;
    }
  
  }
  
  
  function expandedForm(num) {
    const expf = new ExpandedForm(num);
  
    return expf.getResult();
  }