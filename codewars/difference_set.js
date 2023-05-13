/**
 * Определите метод/функцию, которая удаляет из заданного массива целых чисел 
 * все значения, содержащиеся во втором массиве.
 * Примеры (ввод -> вывод):
 * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
 * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
 * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
 */



/**
 * Разность множеств
 * @param {Array} integer_list 
 * @param {Array} values_list 
 * @returns {Array} 
 */
Array.prototype.remove_ = function(integer_list, values_list){
    let difference = integer_list.filter((x) => !values_list.includes(x));
    return difference;
}