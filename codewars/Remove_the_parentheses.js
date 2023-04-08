
/**
 * Удалите скобки
 * В этом ката вам дается строка, например:
 * "example(unwanted thing)example"
 * Ваша задача — удалить все, что находится внутри скобок, а также сами скобки.
 * Приведенный выше пример вернет:
 * "exampleexample"
 */


function removeParentheses(s){
    let lbr = 0, rbr = 0, resultStr = '';
    for (let c of [...s]){
        if (c === '('){
            lbr += 1;
            continue;
        } 
        else if (c === ')'){
            rbr += 1;
            continue;
        } 
        if (lbr === rbr) {
            resultStr += c;
        }
    }
    return resultStr;
}