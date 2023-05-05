/**
 * Напишите функцию, которая принимает массив количества 
 * выпитого из разных чашек и вычисляет общее количество 
 * выпитой богом водки. Результат должен быть округлен до 
 * ближайшего и может быть возвращен как в литрах, 
 * так и в миллилитрах.
 * 
 * input: var shots = ["500ml","2l","1.4l"];
 * out: "3900ml" or "4l"
 */



/**
 * 
 * @param {Array} shots 
 */
function vodkaConsumption(shots){
    let re = /\D{1,2}$/gi;  // без чисел
    let l = 0;
    shots.forEach( (v) => {
      let digits = v.match(/^(0|[1-9]\d*)([.,]\d+)?/g);  // целые или дробные
      if (v.match(re)[0] === 'l') {
        l += (+digits);
      } else if (v.match(re)[0] === 'ml') {
        l += (+digits / 1000);
      }
    });
    
    return Math.round(l) + 'l';
  }