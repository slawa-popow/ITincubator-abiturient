/**
 * Цель этого Kata — вернуть наибольшее расстояние позиций индекса 
 * между совпадающими числовыми значениями в массиве или 0, 
 * если совпадающих значений нет.
 * Пример: В массиве со значениями [0, 2, 1, 2, 4, 1] наибольшее расстояние 
 * индекса находится между совпадающими значениями '1' в индексах 2 и 5. 
 * Выполнение наибольшего расстояния для этого массива вернет 3. (т.е. 5 - 2)
 */


class GreateDistance{
    #inArr = [];  // "копия" входного массива

    // Объект {число: {indexes: [все индексы массива в которых есть число]}}
    // Объект по умолчанию пуст. В методе #calcRepeatIndexesOfValue()
    // он заполняется.
    #dictIndexRepeat;  
    #lenArr;  // длинна входного массива. 

    constructor(inArr){
        this.#inArr = [...inArr];
        this.#lenArr = this.#inArr.length;
        this.#dictIndexRepeat = {};
    }

    get dictRepeat(){
        return this.#dictIndexRepeat;
    }

    /**
     * Публичный метод.
     * Заполнение объекта this.#dictIndexRepeat данными,
     * проход по объекту this.#dictIndexRepeat с вычислением максимальной
     * разницы максимального - минимального индексов вхождения числа
     * в массиве (т-е число должно повторяться минимум дважды в массиве, иначе
     * результат 0).
     * @returns {number} - максимальная разница индексов
     */
    getResult(){
        let max = 0;
        this.#calcRepeatIndexesOfValue();
        for (let key in this.#dictIndexRepeat){
            let different = this.#differentMinMaxIndex(this.#dictIndexRepeat[key].indexes)
            if (max < different){
                max = different;
            }
        }
        return max;
    }

    /**
     * Создать объект без прототипа,
     * добавить атрибут indexes: Array = [];     *
     * @returns {object} - вернуть объект
     */
    #getDictMap(){
        let obj =  Object.create(null);
        obj.indexes = [];
        return obj;
    }

    /**
     * 
     * @param {Array} arrIndexes - входной массив чисел.
     * @returns {number} - разница максимального и минимального чисел
     *                     в входном массиве.
     */
    #differentMinMaxIndex(arrIndexes){
        return (this.#lenArr >= 2) ?
            (Math.max(...arrIndexes) - Math.min(...arrIndexes)) : 0;
    }

    /**
     * 
     * Подсчитывает индексы повторений чисел.
     * и записывает индексы в массив. Например:
     * inputArray = [1, 5, 8, 3, 5];
     * this.#dictIndexRepeat = {1: {indexes: [0]}, 5: {indexes: [1, 4]}, итд}
     */
    #calcRepeatIndexesOfValue(){
        for (let i = 0; i < this.#lenArr; i += 1){
            if (!(this.#inArr[i] in this.#dictIndexRepeat)){
                this.#dictIndexRepeat[this.#inArr[i]] = this.#getDictMap();
            }
            this.#dictIndexRepeat[this.#inArr[i]].indexes.push(i);
        } 
    }
}


var greatestDistance = function(data) {
    let gd = new GreateDistance(data);
    return gd.getResult();
  };





// let a = [9,7,1,2,3,7,0,-1,-2];
// let w = {};
// for (let i = 0; i < a.length; i++){

//     if (!(a[i] in w)){
//         w[a[i]] = {
//             indexes: [],
//             diff(){
//                 return (this.indexes.length >= 2) ? 
//                     (Math.max(...this.indexes) - Math.min(...this.indexes)) : 0 ;
//             } 
//         };
//     }
//     w[a[i]].indexes.push(i);
    
// }

// for(let j in w){

//     print(Math.max(w[j].diff()), w[j], j);
// }
