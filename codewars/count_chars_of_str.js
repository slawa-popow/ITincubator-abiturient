

/**
 * 
 * Основная идея состоит в том, чтобы подсчитать все встречающиеся символы в строке. 
 * Если у вас есть строка типа aba, результат должен быть {'a': 2, 'b': 1}.
 * Что делать, если строка пуста? Тогда результатом должен быть пустой литерал объекта, {}.
 */

class CountCharStr{
    #str;

    constructor(str){
        this.#str = str;
    }

    #getEmptyObject(){
        return {};
    }

    getResult(){
        let resultObj = this.#getEmptyObject();
        let arrStr = [...this.#str];
        for (let value of arrStr){
            if (!resultObj.hasOwnProperty(value)){
                resultObj[value] = 1;
            } else {
                resultObj[value] += 1;
            }
        }
        return resultObj;
    }
}



function count(string) {
    let ccs = new CountCharStr(string);
    return ccs.getResult();
  }