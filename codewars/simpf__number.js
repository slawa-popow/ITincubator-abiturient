/**
 * Получив в качестве входных данных положительное целое число, 
 * верните выходные данные в виде строки в следующем формате:
 * Каждый элемент, соответствующий цифре числа, умножается на степень 10
 *  таким образом, что из суммы этих элементов можно получить исходное число.

    Примеры
    Вход	Выход
    0	""
    56	"5*10+6"
    60	"6*10"
    999	"9*100+9*10+9"
    10004	"1*10000+4"
    Примечание:input >= 0
 */


/**
 * Обрезать строку от 0 до strOperator,
 * если в конце строки есть подстрока strOperator
 * @param {string} str 
 * @param {string} strOperator 
 * @returns {string} - обрезанная строка
 */
function trimEndOperator(str, strOperator) {
  return (str.endsWith(strOperator)) ? 
      str.slice(0, str.lastIndexOf(strOperator)) : str;
}
 

/**
 * Результат
 * @param {number} number 
 * @returns {string}
 */
function simplify(number){
  let anum = [...('' + number)];
  let result = '', i = 0;

  for (; i < anum.length; i += 1) {
    if (+anum[i] === 0) { continue; }
    let rest = anum.slice(i);
    result += anum[i] + '*' + '1'.padEnd(rest.length, '0') + ' ';
  }

  return trimEndOperator(result.trim().split(' ').join('+'), '*1');
}