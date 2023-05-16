/**
 * В этом ката ваша цель — написать функцию, которая будет 
 * менять местами гласные в строке. Любые символы, не являющиеся 
 * гласными, должны оставаться в исходном положении. Вот некоторые примеры:
 * "Hello!" => "Holle!"
 * "Tomatoes" => "Temotaos"
 */

function reverseVowels(str) {
    const vowels = 'aeiouAEIOU'.split('');
    let arr = [...str];
    let resArr = Array.from(new Array(str.length).fill(null));
    let vowArr = [];
    arr.forEach((v, i, _) => {
        (vowels.includes(v)) ? vowArr.push(v) : resArr[i] = v;
    });
    [...resArr].forEach((v, i, _) => {
        if (v == null) {
            resArr[i] = vowArr.pop();
        }
    });
   
    return resArr.join('');
}