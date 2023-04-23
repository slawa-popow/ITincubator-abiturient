"use strict"

import { print } from "./mods/print.js";

class ExpandedForm {
  static range = {
    1: 1,
    2: 10,
    3: 100,
    4: 1000,
    5: 10000,
    6: 100000
  };

  constructor(_num) {
    this.num = ('' + _num).split('.');
    [this.int, this.fract] = this.num;
  }

  getResult() {
    let int = this.getIntPart();
    let fract = this.getFractPart();
    return (+this.int !== 0 ) ? int + ' + ' + fract : fract  ;
  }

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


  trimEndOperator(str, strOperator) {
    return (str.endsWith(strOperator)) ? 
        str.slice(0, str.lastIndexOf(strOperator)) : str;
  }



}


function expandedForm(num) {
  const expf = new ExpandedForm(num);

  return expf.getResult();
}


print(expandedForm(0.28));