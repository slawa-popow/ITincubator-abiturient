/**
 * ROT13 — это простой шифр с заменой букв, который заменяет букву 
 * буквой через 13 букв после нее в алфавите. 
 * ROT13 является примером шифра Цезаря. 
 * Создайте функцию, которая принимает строку и возвращает строку, 
 * зашифрованную с помощью Rot13. 
 * Если в строку включены числа или специальные символы, 
 * они должны быть возвращены как есть. 
 * Сдвинуты должны быть только буквы латинского/английского алфавита, 
 * как в оригинальной "реализации" Rot13.
 * 
 */



class Rot13 {
    static LSYM = 'abcdefghijklmnopqrstuvwxyz';
    // с знаками препинания пришлось пострадать. Экранирование в общей строке не проходит. 
    static CHR = '!#$%&()*+,-./:;<=>?@[]^_{|}~. \n\t\r' + '\'' + '\"' + '\`' + '\\';
    static USYM = Rot13.LSYM.toUpperCase();
    static NUM = '0123456789';
  
    constructor(message) {
      this.message = message;           // Входная строка
      this.LEN = Rot13.LSYM.length;     // 26 длинна алфавита
      this.SHIFT = 13;                  // На сколько двигать буквы в алфавите
    }
  
    /**
     * Возвращает результат решения задания.
     * Итерация по входной строке. Если символ
     * не буква, то не изменяем его. Иначе
     * сдвиг на 13 позиций.
     * @returns { string }
     */
    getResult() {
      let resultStr = '';
      for (let i of this.message) {
        if (this.isAlpha(i)) {
          resultStr += this.shiftTo(i);
        } else {
          resultStr += i;
        }
      }
      return resultStr;
    }
  
    /**
     * Является ли входная строка/символ буквой
     * алфавита?
     * @param { string } _sym 
     * @returns { boolean }
     */
    isAlpha(_sym) {
      let sym = _sym.toString();
      let str = Rot13.CHR + Rot13.NUM;
      let result = [...sym].every( (value) => {
        return !str.includes(value);
      });
      return result;
    }
  
    /**
     * Входной символ/строка в верхнем регистре?
     * @param { string } sym 
     * @returns { boolean }
     */
    isUpper(sym) {
      return (this.isAlpha(sym)) ? sym === sym.toUpperCase() : false;
    }
  

    /**
     * Сдвиг входного символа на 
     * this.SHIFT позиций в алфавите.
     * @param { string } _sym 
     * @returns { string }
     */
    shiftTo(_sym) {
      if (this.isAlpha(_sym)) {                   // если символ буква
        let sym = _sym[0];           // если пришла строка, берем первый символ, иначе все равно буква
        let isUp = false;                         // флаг верхнего регистра буквы
        let position = null;                      // позиция входного символа в алфавите
  
        if (this.isUpper(sym)) {                  // фиксируем регистр символа
          isUp = true;
          sym = sym.toLowerCase();
        }
  
        position = Rot13.LSYM.indexOf(sym);

        /**
         * Если позиция символа в алфавите меньше длины сдвига,
         * то (с учетом, выше (не)установленного, флага регистра)
         * вернуть символ из алфавита по идексу [текущая позиция + сдвиг]
         * 
         * В других случаях играю на свойсвтве остатка от деления.
         * Было замечено, что если позиция символа больше 13,
         * то остаток от разницы длинны алфавита и числа сдвига нужно
         * вычесть от 13 и брать символ из алфавита по этому индексу
         * от начала. Остаток от деления разницы длины алфавина и позиции на 
         * 13 (длину сдвига) никогда не будет больше 26 и меньше 0.
         *  
         * Если позиция символа равна 13 то это костыль.
         */
  
        if (position < this.SHIFT) {
  
          return (isUp) ? Rot13.LSYM[position + this.SHIFT].toUpperCase() :
          Rot13.LSYM[position + this.SHIFT];
  
        } else if (position === this.SHIFT) {
  
          return (isUp) ? Rot13.LSYM[this.LEN % (position + this.SHIFT)].toUpperCase() :
          Rot13.LSYM[this.LEN % (position + this.SHIFT)];
        }
        else {
  
          let shiftSym = Rot13.LSYM[this.SHIFT  - (this.LEN - position) % this.SHIFT];
          return (isUp) ? shiftSym.toUpperCase() : shiftSym; 
        }
      }
    }
  
  
  }
  
  function rot13(message){
    console.log(message);

    let rot13 = new Rot13(message);

    return rot13.getResult();
  }