/**
 * Вам дан массив целых чисел нечетной длины , 
 * в котором все они одинаковы, кроме одного единственного числа.
 * Завершите метод, который принимает такой массив и возвращает 
 * это единственное другое число.
 * Входной массив всегда будет действительным! (нечетная длина >= 3)
 * Примеры:
 * [1, 1, 2] ==> 2
 * [17, 17, 3, 17, 17, 17, 17] ==> 3
 * 
 * 
 * @param {Array} numbers 
 * @returns {numbers}
 */



function stray(numbers) {
    let mapNumbers = (function(arrnum){
      let hmap = {};
      for (let i of arrnum) {
        if (!hmap.hasOwnProperty(i)) {
          hmap[i] = 1;
        } else {
          hmap[i] += 1;
        }
      }
      let [a, b] = Object.keys(hmap);
      return (hmap[a] < hmap[b]) ? a : b;
    })(numbers);
  
    return +mapNumbers;
  }