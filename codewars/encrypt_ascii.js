
/**
 * Вы хотите создавать секретные сообщения, которые могут быть 
 * расшифрованы с помощью Расшифруйте это! ката. Вот условия:
 * 
 * Ваше сообщение представляет собой строку, содержащую слова, разделенные пробелами.
 * Вам необходимо зашифровать каждое слово в сообщении, используя следующие правила:
 * Первая буква должна быть преобразована в код ASCII.
 * Вторая буква должна быть заменена последней буквой
 */

class EncryptAsciiCode {

    constructor(message) {
      this.msg = message.split(' ');
      this.result = [];
    }
  
    getEncrypt() {
      let result = this.clear(this.result);  // очистить и вернуть пустой массив результата
  
      for (let val of this.msg) {
        let word = this.replaceSymbolStr(val, 1, -1);  // поменять местами последний с пермвым символы
        word = this.getCode(word[0]) + word.slice(1);  // заменить первый символ на его код
        result.push(word);
      }
  
      return result.join(' ');
    }
  
  
    /**
     * Вернуть строку числа кода символа.
     * По умолчанию код группы acsii
     * @param {string} symbol 
     * @param {number} index 
     * @returns {string}
     */
    getCode(symbol, index=0) {
      return '' + symbol.charCodeAt(index);
    }
  
  
  
    /**
     * Замена символа в слове 
     * @param {string} word - слово в котором менять символы
     * @param {number} whatIndx - какой индекс (значение по индексу)
     * @param {number} forWhatIndx - с каким поменять местами
     * @returns {string} измененное слово 
     */
    replaceSymbolStr(word, whatIndx, forWhatIndx) {
      let resultStr = [...word];
      let [indxA, indxB] = this.#getValidIndexes(word, whatIndx, forWhatIndx); // вернуть адекватные индексы слова
      let oneSym = resultStr[indxA];  // Символ для замены
      let twoSym = resultStr[indxB];  // этим символом.
      resultStr[indxA] = twoSym;      // Замена местами
      resultStr[indxB] = oneSym;      // ....
  
      return resultStr.join('');
    }
  
  
    /**
     * Очистить массив и вернуть
     * ссылку на него.
     * @param {Array} arr 
     * @returns {Array}
     */
    clear(arr) {
      arr.length = 0;
      return arr;
    }


  
    /**
     * Проверить на адекватность входных
     * чисел, могут ли они быть индексами слова word
     * Вернуть массив с адекватными индексами слова word.
     * 
     * @param {string} w - word слово
     * @param {number} ia - число 1
     * @param {number} ib - число 2
     * @returns {Array}
     */
    #getValidIndexes(w, ia, ib) {
      let len = w.length - 1;
      let indexA = this.#isValidIndex(len, ia);
      let indexB = this.#isValidIndex(len, ib);
      return [indexA, indexB];
    }

  
    /**
     * Если число в диапазоне, то вернуть его.
     * Если число отрицательно, то предполагаем
     * что это индекс конечного элемента массива,
     * поэтому возврат range
     * 
     * @param {number} range - array.length 
     * @param {number} index - предполагаемы индекс array
     * @returns 
     */
    #isValidIndex(range, index) {
      return ((index >= 0)  && (index <= range)) ? index : range;
    }
  
  }

  
  
  var encryptThis = function(text) {
    const encr = new EncryptAsciiCode(text);
  
    return encr.getEncrypt(); 
  }