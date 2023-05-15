/**
 * Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные 
 * числа в порядке возрастания, оставив четные числа на их исходных позициях.
 * 
 * Примеры
 * [7, 1]  =>  [1, 7]
 * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 * @param {Array} array 
 * @returns {Array}
 */




function sortArray(array) {
    let arr = [...array];
    let resArr = Array.from(new Array(array.length).fill(null));
    let oddArr = [];

    arr.forEach((v, i, _) => {
        (v % 2 !== 0) ? oddArr.push(v) : resArr[i] = v;
    });

    oddArr.sort((a, b) => {
        return a - b;
    });

    [...resArr].forEach((v, i, _) => {
       if (v == null) {
            resArr[i] = oddArr.shift();
        }
    });

    return resArr;
  }