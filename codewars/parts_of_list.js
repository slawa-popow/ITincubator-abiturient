/**
 * Напишите функцию partlist, которая дает все способы разделить список 
 * (массив) не менее чем из двух элементов на две непустые части.
 * Каждые две непустые части будут в паре (или массиве для языков без 
 * кортежей или a structв C - C: см. Примеры тестовых случаев - )
 * Каждая часть будет в строке
 * Элементы пары должны быть в том же порядке, что и в исходном массиве:
 * 
 *  a = ["az", "toto", "picaro", "zone", "kiwi"] out -->
 * 
 * [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], 
 *      ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
 * 
 * @param {Array} arr 
 * @returns {Array}
 */


function partlist(arr) {
    let resultArr = [],
        lenArr = arr.length;
  
    for (let i = 1; i < lenArr; i += 1) {
      let bucket = []
      let subArr = [...arr.slice(0, i)].join(' ');
      let restArr = arr.slice(i).join(' ');
      bucket.push(subArr, restArr);
      resultArr.push(bucket); 
    }
  
    return resultArr;
}