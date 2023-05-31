/**
 * Given a string and an array of index numbers, return the 
 * characters of the string rearranged to be in the order 
 * specified by the accompanying array.
 * Ex:
 * scramble('abcd', [0,3,1,2]) -> 'acdb'
 */


/**
 * 
 * @param {string} str 
 * @param {Array} arr 
 */
function scramble(str, arr) {
    let resultArr = Array.from(new Array(str.length));
    arr.forEach((v, i) => {
        resultArr[v] = str[i];
    });
    return resultArr.join('');
};

// print(scramble('abcd', [0,3,1,2]));