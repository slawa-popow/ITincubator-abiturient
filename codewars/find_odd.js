
/**
 * Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.
 * Всегда будет только одно целое число, которое встречается нечетное количество раз.
 * Примеры
 * [7]должен вернуть 7, потому что это происходит 1 раз (что нечетно).
 * [0]должен вернуть 0, потому что это происходит 1 раз (что нечетно).
 * [1,1,2]должен вернуть 2, потому что это происходит 1 раз (что нечетно).
 * 
 */



function findOdd(A) {
    let arrnum = [...A];
    let mmax = 0; // максимальное нечетное число
    let keyMmax = null; // ключ словаря
  
    // словарь. ключ - значение массива,
    //значение - кол-во повторений в массиве
    let mapNumbers = (function(arrnum){                              
      let hmap = {};
      for (let i of arrnum) {
        if (!hmap.hasOwnProperty(i)) {
          hmap[i] = 1;
        } else {
          hmap[i] += 1;
        }
      }
      return hmap;
    })(arrnum);
  
    for (let i in mapNumbers) {
      let value = mapNumbers[i];
      if (value % 2 !== 0 && (value > mmax)) {
        mmax = value;
        keyMmax = i;
      }
    }
  
    return keyMmax;
  }