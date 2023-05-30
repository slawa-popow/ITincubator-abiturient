/**
 * Цель проста: поменять местами элементы двух массивов таким образом, 
 * чтобы их новое содержимое также было инвертировано.

   // before
    const myArray = ['a', 'b', 'c'];
    const otherArray = [1, 2, 3];

    exchangeWith(myArray, otherArray);

    // after
    myArray => [3, 2, 1]
    otherArray => ['c', 'b', 'a'] 
 */


function exchangeWith(a, b) {
    let a1 = [...a].reverse();
    let b1 = [...b].reverse();
    a.length = 0;
    b.length = 0;
    a1.forEach((v, i) => {
        b.push(v);
    });
    b1.forEach((v, i) => {
        a.push(v);
    });
}