/**
 * Дана последовательность чисел, найти наибольшую сумму пар в последовательности.
 * Например
 * [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
 * [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
 * Входная последовательность содержит как минимум два элемента, и каждый элемент является целым числом.
 */

/**
 * [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
 * @param {Array} numbers 
 */
function largestPairSum (numbers) {
    let bucket = numbers.sort((a, b) => {
        return b - a;
    });
    
    return bucket[0] + bucket[1];
}