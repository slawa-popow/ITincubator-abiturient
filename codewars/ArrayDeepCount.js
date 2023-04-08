/**
 * 
 * Вам дан массив. Завершите функцию, которая возвращает 
 * количество ВСЕХ элементов в массиве, включая любые вложенные массивы.
    Примеры
    []                   -->  0
    [1, 2, 3]            -->  3
    ["x", "y", ["z"]]    -->  4
    [1, 2, [3, 4, [5]]]  -->  7
    Вход всегда будет массивом.
 *
 */

    function deepCount(arr){
        let total = 0;
        for (let v of arr){
            if (Array.isArray(v)) {
               total += deepCount(v) + 1;
            } else {
                total += 1;
            }
        }
        return total;
    }


// console.log(deepCount([1, 2, [3, 4, [5]]]));