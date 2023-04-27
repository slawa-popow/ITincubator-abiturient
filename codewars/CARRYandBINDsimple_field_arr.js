
// Вам дан массив arr. Примените к нему следующий алгоритм:
// найти интервалы последовательных простых чисел и последовательных не простых чисел;
// заменить каждый такой интервал суммой чисел в нем;
// если результирующий массив отличается от исходного, вернуться к шагу 1, иначе вернуть результат.
// ЧИСЛА В МАССИВЕ ЧЕРЕДУЮТСЯ ПО ТИПУ: т-е простое, составное, простое, составное итд.
//                                     Или: составное, простое, составное итд
// Вход
// Непустой целочисленный массив, такой что:

// -10000 ≤ arr[i] ≤ 10000
// 1 ≤ arr.length ≤ 1000
// Выход
// Целочисленный массив.

// Примеры
// Для arr = [1, 2, 3, 5, 6, 4, 2, 3]результата должно быть [21, 5]:

// [1, 2, 3, 5, 6, 4, 2, 3] --> [(1), (2 + 3 + 5), (6 + 4), (2 + 3)] --> [1, 10, 10, 5]
// [1, 10, 10, 5] --> [(1 + 10 + 10), (5)] --> [21, 5]


/**
 * Алгоритм. Методы.
 */
class PrimeAlg {

    /**
     * Является ли входное число простым?
     * (Алгоритм честно скопировал из интернета)
     * @param {number} num 
     * @returns {boolean}
     */
    isPrimeNum(num) {
      if (num <= 1) {return false;}
      if (num % 2 === 0) {
        return num === 2;
      }
      let n = 3;
      while((n**2 <= num) && (num % n !== 0)) {
        n += 2;
      }
      return n**2 > num;
    }
  

    /**
     * Входное число составное?
     * @param {number} num 
     * @returns {boolean}
     */
    isComposeNum(num) {
      return !this.isPrimeNum(num)
    }
  

    /**
     * Работает в методе this.isAllPrimeNums(arr)
     * Если входное число простое, то возвращает метод,
     * который должен вернуть истину если ему(this.isComposeNum или this.isPrimeNum)
     * дали на вход составное число и наоборот. 
     * @param {number} elem 
     * @returns {Function}
     */
    #getTypeCallback(elem) {
      let typeElems = this.isPrimeNum(elem);
      return (typeElems) ? this.isComposeNum.bind(this) :
                           this.isPrimeNum.bind(this);
    }
  
    /**
     * Проверяет что в массиве чередуются
     * простые и составные числа или наоборот
     * @param {Array} arr 
     * @returns {Boolean}
     */
    isAllPrimeNums(arr) {
      if (arr.length === 1) {return true;}  // в массиве одно число - закончить проверку
       
      let callback = this.#getTypeCallback(arr[0]);     // задать колбэк для первого элемента массива
      for (let i = 1; i < arr.length; i++) {           // начинаем итерацию со второго элемента
        if (callback(arr[i])) {                       // если предыдущее число например простое
          callback = this.#getTypeCallback(arr[i]);  // то переназначаем колбэк, который для следующего числа
        } else { return false; }                    // должен вернуть истина если оно составное.
      }                                            // Если есть 2 и более последовательно простых/составных,
      return true;                                // вернуть ложь.
    }
  
  }
  
  
  /**
   * Решение задания
   */
  class SimpleFunArray {
  
    constructor(arr, algorithm=null) {
      this.arr = [...arr];
      this.algorithm = algorithm || new PrimeAlg();
    }
  
    /**
     * Результат решения задачи
     * @returns {Array}
     */
    getResult() {
      // debugger;
      return this.unionTypeNumsInGroup(this.arr);
    }
  
    /**
     * Pаботает в this.unionTypeNumsInGroup(arr)
     * Ищет во входном массиве диапазон последовательности простых/составных
     * чисел. Какие (простые/составные) числа искать берет на себя колбэк
     * функция, переданная аргументом.
     * Возвращает массив диапазона и индекс - граница диапазона 
     * @param {Array} arr входной массив
     * @param {Function} callback колбэк функция обработки элементов массива
     * @param {number} startIndex индекс с которого начать проход массива
     * @returns {Array}
     */
    #findPrimes(arr, callback, startIndex) {
      let bucket = [], endPos = 0;
      for (let i = startIndex; i < arr.length; ++i) {
        if (callback.call(this, arr[i])) {
          bucket.push(arr[i]);
          endPos = i;
        } else { break; }
      }
      return [bucket, endPos];
    }
  

    /**
     * Внимание! Рекурсия.
     * 
     * Ходит по входному массиву,
     * собирает последовательные диапазоны простых и 
     * составных чилел, суммирует элементы в диапазонах,
     * если в результирующем массиве остались одни простые числа,
     * то вернуть этот массив, иначе рекурсивно пройтись по нему еще разок.
     *  
     * @param {Array} arr 
     * @returns {Array}
     */
    unionTypeNumsInGroup(arr) {
      if (this.algorithm.isAllPrimeNums(arr)) {     // если в массиве простые числа - вернуть его
        return arr;
      }
      let bucket = [];  // массив для промежуточных вычислений
      let startPos;     // стартовая позиция в arr
      /**
       *  Каррировать (т-к массив передается всегда) 
       * и связать с контекстом this.algorithm  
       */
      let callbackPrime = this.#findPrimes.bind(this.algorithm, arr, this.algorithm.isPrimeNum);
      let callbackCompose = this.#findPrimes.bind(this.algorithm, arr, this.algorithm.isComposeNum);

      let callback = null;
      for (let i = 0; i < arr.length; i += 1) {
        if (this.algorithm.isPrimeNum(arr[i])) {
          startPos = i;
          callback = callbackPrime;
        } else {
          startPos = i;
          callback = callbackCompose;
        }
        let [group, endPos] = callback.call(this, startPos);  // группа (диапазон простые/составные) и граница диапазона
        bucket.push(group);
        i = endPos;         // изменить значение счетчика итераций цикла for
      } 
      let result = this.getSumArr(bucket);  // сумма значений диапазонов

      return this.unionTypeNumsInGroup(result);  // еще разок пройдемся по массиву result, или не пройдемся.
    }
  
    /**
     * Сумма чисел во вложенных массивах (диапазонов)
     * входного массива: [[6,4, 9]] => 19
     * @param {Array} arr 
     * @returns {Number}
     */
    getSumArr(arr) {
      return arr.map( (val) => {
        return val.reduce( (pV, cV) => {return pV + cV}, 0);
      });
    }
  
  }
  
  
  function simplifiedArray(arr) {
    const simpleFun = new SimpleFunArray(arr);
    
    return simpleFun.getResult();
  }