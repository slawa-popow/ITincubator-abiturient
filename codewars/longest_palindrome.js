/**
 * 
 * Самый длинный палиндром
 * Найдите длину самой длинной подстроки в данной строке, sкоторая совпадает в обратном порядке.
 * Например, если ввод был «Мне нравятся быстрые гоночные автомобили», 
 * racecarдлина подстроки ( ) будет равна 7.
 * Если длина входной строки равна 0, возвращаемое значение должно быть 0.
 * 
    Пример:
    "a" -> 1 
    "aab" -> 2  
    "abcde" -> 1
    "zzbaabcd" -> 4
    "" -> 0 
 */






// class PalindromDict {
//   #arrStr = [];
//   #dict = {};

//   constructor(arrStr) {
//     this.#arrStr = arrStr || [];
//     this.#fill(this.#arrStr);
//   }

//   get d() {
//     return this.#dict;
//   }


//   #fill(arrStr) {
//     this.clear();
//     for (let v of arrStr) {
//       this.add(v, []);
//     }
//     return this;
//   }


//   clear(){
//     if (!this.isEmpty()) {
//       for (let k in this.#dict) {
//         delete this.#dict[k];
//       }
//     }
//     return this;
//   }


//   isEmpty() {
//     return !Object.keys(this.#dict).length;
//   }


//   add(key, value) {
//     if (!this.#dict.hasOwnProperty(key)) {
//       if (Array.isArray(value)) {
//         if (value.length) {
//           this.#dict[key].push(...value);
//         } 
//       }
//       this.#dict[key] = value;
//     } else {
//       this.#dict[key].push(value);
//     }
//   }

// }




// class LongPalindrome {
//   #_splitStr = [];
  

//   constructor(str) {
//     this.splitStr = str;
//   }

//   get splitStr() {
//     return this.#_splitStr;
//   }


//   getReverseStr(str) {
//     return [...str].reverse().join('');
//   }


//   set splitStr(valueString) {
//     if (this.splitStr.length) {
//       this.#_splitStr.length = 0;
//     }
//     this.#_splitStr =  valueString.split(' ');
//   }


//   getAllCombinationSymbolsOfWord() {
//     let dict = new PalindromDict(this.splitStr);
//     for (let word of this.splitStr) {
//       for (let j = 0; j < word.length; j += 1) {
//         for (let i = 0; i < word.length; i += 1) {
//           let sliceW = word.slice(j, i+1);
//           if (sliceW) {
//              dict.add(word, sliceW);
//           }
//         }
//       }
//     }

//     return dict.d;
//   }

//   getLensPalindrome() {
//     // debugger;
//     let str = '', maxlen = 0;
//     let combo = this.getAllCombinationSymbolsOfWord();
//     for (let key in combo) {
//       for (let strOfArr of combo[key]) {
//         let reverse = this.getReverseStr(strOfArr)
//         if ((strOfArr === reverse) && (strOfArr.length > maxlen)) {
//           str = strOfArr;
//           maxlen = strOfArr.length;
//         }
//       }
//     }

//     return maxlen; 
//   }

  
// }


function PalindromDict(arrStr) {
    this.arrStr = arrStr || [];
    this.dict = {};
    this.fill(arrStr);

    get = function d() {
        return this.dict;
    }
}

PalindromDict.prototype.getReverseStr = function(str) {
    return Array.from(str).reverse().join('');
  }

PalindromDict.prototype.fill = function(arrStr) {
    this.clear();
    for (let v of arrStr) {
      this.add(v, []);
    }
    return this;
  }

PalindromDict.prototype.clear = function() {
    if (!this.isEmpty()) {
      for (let k in this.dict) {
        delete this.dict[k];
      }
    }
    return this;
  }

PalindromDict.prototype.isEmpty = function() {
    return !Object.keys(this.dict).length;
  }

PalindromDict.prototype.add = function(key, value) {
    if (!this.dict.hasOwnProperty(key)) {
      if (Array.isArray(value)) {
        if (value.length) {
          this.dict[key].push(...value);
        } 
      }
      this.dict[key] = value;
    } else {
      this.dict[key].push(value);
    }
  }



function LongPalindrome(str) {
    this.splitStr = str || [];

    get = function splitStr() {
        return (this.hasOwnProperty('_splitStr')) ? this._splitStr : [];
      }

    set = function splitStr(valueString) {
        if (this.splitStr.length) {
            this._splitStr.length = 0;
        }
        this._splitStr =  valueString.split(' ');
    }
}

LongPalindrome.prototype.getAllCombinationSymbolsOfWord = function() {
    let dict = new PalindromDict(this.splitStr);
    for (let word of this.splitStr) {
      for (let j = 0; j < word.length; j += 1) {
        for (let i = 0; i < word.length; i += 1) {
          let sliceW = word.slice(j, i+1);
          if (sliceW) {
             dict.add(word, sliceW);
          }
        }
      }
    }

    return dict.d;
  }

LongPalindrome.prototype.getLensPalindrome = function() {
    // debugger;
    var str = '', maxlen = 0;
    var combo = this.getAllCombinationSymbolsOfWord();
    for (let key in combo) {
      for (let strOfArr of combo[key]) {
        let reverse = this.getReverseStr(strOfArr)
        if ((strOfArr === reverse) && (strOfArr.length > maxlen)) {
          str = strOfArr;
          maxlen = strOfArr.length;
        }
      }
    }

    return maxlen; 
  }


  // in codewars Kata the NodeJS of 8.x version
 var longestPalindrome=function(s){
    var lp = new LongPalindrome(s);

    return lp.getLensPalindrome(); 
  }