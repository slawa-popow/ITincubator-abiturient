/**
 * Нужно преобразовать 10-значный ISBN в 13-значный ISBN, 
 * добавив префикс (978) в начало, а затем пересчитав последнюю 
 * контрольную цифру, используя довольно простой метод:
 * ------------------------------------------------------------------------------------
 *    ISBN = "1-85326-158-0"
      remove_last_character = "1-85326-158-"
      add_prefix = "978-1-85326-158-"
      twelve_digits = 978185326158

      check_digit = 9*1 + 7*3 + 8*1 + 1*3 + 8*1 + 5*3 + 3*1 + 2*3 + 6*1 + 1*3 + 5*1 + 8*3
                  =   9 +  21 +   8 +   3 +   8 +  15 +   3 +   6 +   6 +   3 +   5 +  24
                  = 111
                  111 % 10 = 1
                  10 - 1 = 9

      thirteen_digit = 9781853261589
 
    return "978-1-85326-158-9"      
  --------------------------------------------------------------------------------------- 
  Возьмите ISBN ("1-85326-158-0") .
  Удалите последний символ, который может быть цифрой или «X».
  Добавьте в начало номер префикса (978) и дефис (-).
  Возьмите 12 цифр, затем поочередно умножьте каждую цифру слева направо на 1 или 3.
  Сложите все 12 полученных чисел.
  Возьмите число и выполните деление по модулю 10.
  Если результат равен 0, контрольная цифра равна 0. Если это не 0, вычтите результат из 10. 
    В данном случае это контрольная цифра.
  Добавьте контрольную цифру в конец результата шага 3.
  Вернуть 13- значный ISBN в соответствующем формате :
  " prefix number-- " " ---- "original ISBN except the last charactercheck digit
  9781853261589
 *
 */

  class ISBNconverter {

    static NUMBERS = '0123456789';
  
    constructor(_isbn) {
      this.isbn = [..._isbn];
    }
  
    /**
     * Результат
     * @returns {string}
     */

    getConvert() {
      this.deleteLastSymbol();
      this.insertPrefixToBegin('978');
      let contrsum = this.getControlSum(this.reCalculateNumbers([1, 3]));
      this.isbn.push('' + contrsum);
  
      return this.isbn.join('');
    }
  

  
    /**
     * Удалить последний символ в isbn
     * @returns {string}
     */

    deleteLastSymbol() {
      this.isbn = this.isbn.slice(0, this.isbn.length - 1);
      return this.isbn;
    }
  

  
    /**
     * Вставить префикс в начало isbn
     * @param {string} prefix 
     * @param {string} defis 
     * @returns {string}
     */

    insertPrefixToBegin(prefix, defis='-') {
      this.isbn.unshift(...[...(prefix + defis)]);
      return this.isbn;
    }
  

  
    /**
     * Пришедший cимвол или строка - число?
     * @param {string} _sym 
     * @returns {boolean}
     */

    isNumber(_sym) {
      let sym = _sym.toString();
      let str = ISBNconverter.NUMBERS;
      let result = [...sym].every( (value) => {
        return str.includes(value);
      });
      return result;
    }
  

  
    /**
     * Умножить цифры номера то на 1, то на 3
     * (аргументом передан массив)
     * Вернуть произведение суммы.
     * @param {Array} numsToMulArr 
     * @returns {number}
     */

    reCalculateNumbers(numsToMulArr) { // [3, 1]
      let mulBucket = [];  // массив результата
      let signIndex = 1,  // signIndex и index для смены индекса в цикле с 0 на 1, 
          index = 0;     // аналог циклической очереди.
  
      // взять из isbn только числа
      let digitsIsbn = this.isbn.filter( (value) => {
        return this.isNumber(value);
      });

       // На каждой итерации index меняется с 0 на 1 (0, 1, 0, 1 итд)
      for (let value of digitsIsbn) { 
        signIndex *= -1;
        mulBucket.push(+value * numsToMulArr[index]);
        index -= signIndex;
      }
  
      return this.sumMulsNumber(mulBucket);
    }
  
    
  
    /**
     * Расчитать и вернуть значение
     * контрольной суммы.
     * @param {number} num 
     * @returns {number}
     */

    getControlSum(num) {
      let rem = num % 10;
      return (rem === 0) ? 0 : 10 - rem; 
    }
  

  
    /**
     * Возвращает сумму значений массива.
     * (см. reCalculateNumbers() оператор return)
     * 
     * @param {Array} mulslArr 
     * @returns {number}
     */

    sumMulsNumber(mulslArr) {
      return mulslArr.reduce( (pV, cV) =>{
        return pV + cV;
      }, 0);
    }
  
  }
  
  
  
  
  function isbnConverter(isbn) {
    const isbnConv = new ISBNconverter(isbn);
    return isbnConv.getConvert();
  }