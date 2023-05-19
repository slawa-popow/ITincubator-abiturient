/**
 * Напишите функцию, которая берет произвольное количество строк и 
 * чередует их (объединяет их, чередуя символы из каждой строки).
 * Например combineStrings('abc', '123')должен вернуть 'a1b2c3'.
 * Если строки имеют разную длину, функция должна чередовать их, 
 * пока каждая строка не закончится, продолжая добавлять символы из оставшихся строк.
 * Например combineStrings('abcd', '123')должен вернуть 'a1b2c3d'.
 * Функция должна принимать любое количество аргументов и комбинировать их.
 * Например combineStrings('abc', '123', '£$%')должен вернуть 'a1£b2$c3%'.
 * Примечание: если передан только один аргумент, верните только эту строку. 
 * Если аргументы не переданы, возвращается пустая строка.
 */

class Combine {
    constructor(...args) {
        this.arrStr = [...args]; // входные строки
    }


    /**
     * Решение задания
     * @returns {string}
     */
    getResult() {
        if (this.arrStr.length === 0) {
            return '';
        } else if (this.arrStr.length === 1) {
            return this.arrStr[0];
        } else {
            return this.combineString();
        }
    }


    /**
     * создается массив итераторов строк,
     * в цикле типа "очередь" в результирующий
     * массив заносятся символы от значения (вызов next())
     * каждого итератора. Если итератор стал
     * пустой, то удалить его из массива
     * итераторов.
     * @returns {string}
     */
    combineString() {
        let iterators = this.getAllIterators();
        let result = [], nextObject = null;
        while(iterators.length > 0) {
            nextObject = iterators[0].next();
            if (nextObject.done) {
                iterators.shift();
            } else {
                result.push(nextObject.value);
                iterators.push(iterators.shift());
            }
        }
        return result.join('');
    }


    /**
     * Вернуть итератор
     * @param {string} iterable 
     * @returns {iterator}
     */
    getItetator(iterable) {
        return iterable[Symbol.iterator]();
    }


    /**
     * Пройтись циклом по входным строкам
     * и для каждой создать итератор.
     * @returns {Array} - массив итераторов строк.
     */
    getAllIterators() {
        let bucket = [];  
        for (let value of this.arrStr) {
            bucket.push(this.getItetator(value));
        }
        return bucket;
    }
    
}


function combineStrings(...args) {
    const combine = new Combine(...args);
    return combine.getResult();
}