"use strict"

import { print } from "./mods/print.js";

class PalindromDict {
  #arrStr = [];
  #dict = {};

  constructor(arrStr) {
    this.#arrStr = arrStr || [];
    this.#fill(this.#arrStr);
  }

  #fill(arrStr) {
    this.clear();
    for (let v of arrStr) {
      this.add(v, []);
    }
    return this;
  }

  clear(){
    if (!this.isEmpty()) {
      for (let k in this.#dict) {
        delete this.#dict[k];
      }
    }
    return this;
  }

  isEmpty() {
    return !Object.keys(this.#dict).length;
  }

  add(key, value) {
    if (!this.#dict.hasOwnProperty(key)) {
      if (Array.isArray(value)) {
        if (value.length) {
          this.#dict[key].push(...value);
        } 
      }
      this.#dict[key] = value;
    } else {
      this.#dict[key].push(value);
    }
  }

  


}

class LongPalindrome {
  #_splitStr = [];
  
  constructor(str) {
    this.splitStr = str;
    this.dict = new PalindromDict(this.splitStr);
  //   for (let i of [..."1234"]){
  //     this.dict.add(i, i);
  //   }
  //   this.dict.add('baa', 888);
  //   this.dict.add('baa', 'aAAAa');

  }

  get splitStr(){
    return this.#_splitStr;
  }

  set splitStr(valueString) {
    if (this.splitStr.length) {
      this.#_splitStr.length = 0;
    }
    this.#_splitStr =  valueString.split(' ');
  }

  

  
}





// in codewars Kata the NodeJS of 8.x version
 var longestPalindrome=function(s){
    var lp = new LongPalindrome(s);

    return lp.dict;
  }

  print(longestPalindrome('baa asdfg'));