/**
 *  Напишите функцию, которая удаляет пробелы из значений и возвращает массив, показывающий уменьшение пробелов.
Например, запуск этой функции в массиве ['i', 'have','no','space']даст['i','ihave','ihaveno','ihavenospace']
 */

function spacey(array){
    let result = [];
    for (let i=0; i<=array.length; i++) {
        result.push(array.slice(0, i).reduce((pv, cv) => {
                return pv + cv;
        }, ''));
    }
   
    return result.slice(1);
}