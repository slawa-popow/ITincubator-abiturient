/**
 * В этом небольшом задании вам дается строка 
 * чисел, разделенных пробелами, и вы должны 
 * вернуть наибольшее и наименьшее число.
 * Примеры
 * highAndLow("1 2 3 4 5");  // return "5 1"
 * highAndLow("1 2 -3 4 5"); // return "5 -3"
 */

function highAndLow(numbers){
    let arrNums = numbers.split(' ').map(v => +v);
    return `${Math.max(...arrNums)} ${Math.min(...arrNums)}`;
}