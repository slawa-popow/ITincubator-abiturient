/**
 * zipWith( или zip_with) принимает функцию и два массива 
 * и объединяет массивы вместе, применяя функцию к каждой паре значений.
 * Значением функции является один новый массив.
 * Если массивы имеют неравную длину, вывод будет такой же длины, как и более короткий.
 * (Значения более длинного массива просто не используются.)
 * zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
 * zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]
 */


/**
 * 
 * @param {Function} fn 
 * @param {Array} a0 
 * @param {Array} a1 
 * @returns {Array}
 */
function zipWith(fn, a0, a1) {
    let shortArr = (a0.length < a1.length) ? 
               a0.length : a1.length;
    let result = [];
    for (let i = 0; i < shortArr; i += 1) {
        result.push(fn.call(this, a0[i], a1[i]));
    }
    return result;
}