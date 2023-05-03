/**
 * Напишите функцию , persistenceкоторая принимает положительный 
 * параметр numи возвращает его мультипликативную постоянство, 
 * то есть количество раз, которое вы должны умножить на цифры, 
 * num пока не получите одну цифру.
 * 
 * Например (Ввод --> Вывод) :
 * 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
 * 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
 * 4 --> 0 (because 4 is already a one-digit number)
 */

/**
 * 
 * @param {number} num чила 
 * @returns {number}
 */
function persistence(num) {
    let n = ''+num;
    if (n.length <= 1) {return 0}
    
    return 1 + persistence(
      [...n].reduce((pv, cv) => {
        return parseInt(pv) * parseInt(cv);
      }, 1)
    );
  
  }