"use strict"
/**
 * Для заданной строки sнайдите символ c(или C) с самым длинным 
 * последовательным повторением и вернитесь: [c, l]
 * где l(или L) – длина повторения. Если есть два или 
 * более одинаковых символа, lверните первый в порядке появления.
 * Для возврата пустой строки:
 * ["", 0]
 * 
 */


class LongRepetit{
    #sline;

    /**
     * входная строка
     * @param {string} sline 
     */
    constructor(sline){
        this.#sline = sline;
    }



    /**
     * Подсчет повторяющихся символов и
     * вставка в массив [символ, сколько было повторений]
     * @returns вызов getResult(массив)
     */
    getRepetitions(){
        // debugger;
        let dict = [];
        let arrSym = [...this.#sline + ' '];
        let sequChar = arrSym[0], sequCount = 0;
        
        for (let sym of arrSym){
            if (sequChar === sym){
                 sequCount++;
            } else {
                dict.push([sequChar, sequCount]);
                sequChar = sym;
                sequCount = 1; 
            }
            
           
        }
        return this.#getResult(dict);
    }



    /**
     * Нахождение максимума из числа повторений
     * в массиве, далее в цикле for: если первое совподение
     * с максимумом, то вернуть пару [символ, кол-во повторений].
     * 
     * @param {Array} arrDict 
     * @returns {Array}
     */
    #getResult(arrDict){
        let max = Math.max(...arrDict.map( (v) => {
            return v[1];
        } ));

        for (let [key, val] of arrDict){
            if (val === max){
                return [key, max];
            }
        }
        return ['', 0];
    }
}

function longestRepetition(s) {
    let lr = new LongRepetit(s);
    return lr.getRepetitions();
  }
