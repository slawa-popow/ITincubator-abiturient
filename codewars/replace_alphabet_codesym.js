/**
 * В этой ката вы должны, учитывая строку, заменить каждую букву ее позицией в алфавите.
 * Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.
 * "a" = 1, "b" = 2, и т.д.
 * Пример
 * alphabetPosition("The sunset sets at twelve o' clock.")
 * Должен возвращаться "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(в виде строки)
 */

class AlphabetPos {
    static alphaLine = 'abcdefghijklmnopqrstuvwxyz';
  
    constructor(text) {
      this.text = [...text];
    }
  
    /**
     * Итерация по массиву символов входной строки. 
     * Если символ - буква, то взять ее номер
     * позиции в алфавите из словаря dictAlpha
     * и добавить в массив результата.
     * @returns {string}
     */
    getResult() {
      let resultArr = [];
      let dictAlpha = this.getAlpha();
      
      this.text.forEach(element => {
        if (this.isAlpha(element)) {
          resultArr.push(dictAlpha[element.toLowerCase()]);
        }
      }, this);
  
      return resultArr.join(' ');
    }
  
  
    /**
     * Cоздать массив пар ключ:значение
     * (буква: позиция в алфавите) и создать
     * объект с ключом - буква, значением - позиция.
     * Вернуть объект (словарь).
     * @returns {object}
     */
    getAlpha() {
      let keyValAlpha = [...AlphabetPos.alphaLine]
                        .map( (value, index) => {
                          return [value, '' + (index + 1)];
                        });
      
      return Object.fromEntries(keyValAlpha);
    }
  
    
    /**
     * Входной символ буква?
     * @param {string} _sym 
     * @returns {boolean}
     */
    isAlpha(_sym) {
      let sym = '' + _sym.toLowerCase();
      let str = AlphabetPos.alphaLine;
      let result = [...sym].every( (value) => {
        return str.includes(value);
      });
      return result;
    }
  
  }
  
  function alphabetPosition(text) {
    const alhpos = new AlphabetPos(text);
    return alhpos.getResult();
  }