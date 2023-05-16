/**
 * Ваша задача — создать таблицу умножения N×N размера, указанного в параметре.
 * Например, когда дано size3:
 * 1 2 3
 * 2 4 6
 * 3 6 9
 * Для данного примера возвращаемое значение должно быть:
 * [[1,2,3],[2,4,6],[3,6,9]]
 */

const multiplicationTable = function(size) {
    let table = Array.from(new Array(size)); 
    table.forEach((_, i, a) => {
        a[i] = new Array(size).fill(null);
    }); 
    
    for (let k = 0; k < size; k += 1) {
        table[0][k] = k+1;
        table[k][0] = k+1;
    }
    for (let i = 1; i < size; i += 1) {
        for (let j = 1; j < size; j += 1) {
            table[i][j] = table[0][j] * table[i][0];
        }
    }

    return table;
}