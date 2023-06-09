/**
 *@description
    ================ 6 kyu Does my number look big in this? ==================

    Нарциссическое число (или число Армстронга) — это положительное число, 
    представляющее собой сумму собственных цифр, каждая из которых возведена 
    в степень количества цифр в данном основании. 
    В этом Ката мы ограничимся десятичными числами (с основанием 10).
    ==========================================================================

    Например, возьмем 153 (3 цифры), что является числом Армстронга:

        1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

        и 1652 (4 цифры), что не является:

        1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

    Ваш код должен возвращать истину или ложь (не «истину» и «ложь») в зависимости от того, 
    является ли данное число Нарциссическим числом в базе 10.

    Это может быть True и False на вашем языке, например PHP.

    Проверка ошибок текстовых строк или других недопустимых входных данных не требуется, 
    в функцию будут переданы только допустимые положительные ненулевые целые числа.

 */


/**
 * @namespace modAlgoritms * 
 */
const modAlgoritms =  (function armstrongNumber(){

    /**
     * Абстрактный 
     * @constructor 
     */
    function Algorithm(){
        if(this.constructor === Algorithm){
            throw new Error('ERROR: Должен быть переопределен.');
        }
    }
    /**
     * Интерфейсный метод
     * @param {number} value 
     */
    Algorithm.prototype.calculate = function(value){
        throw new Error("ERR: function of Abstract");
        }

    // ----------------------------------------------------------
    //                 SomeAlgorithm для проверки   

    function SomeAlgorithm(){
        this.calculate = function(value){
            let x = [];
            for (let i = 0; i < 10; i++){
                x.push(`[${i}]: value * ${i} = ${value * i}`);
            }
            return x.join('\n');
        }
    }
    // ----------------------------------------------------------

    /**
     * Реализация стратегии (алгоритма).
     * AlgorithmArmstrongNum наследуется по прототипу
     * от Algorithm.
     * @constructor
     */
    function AlgorithmArmstrongNum(){

        /**
         * Переопределенный интерфейсный 
         * метод алгоритма.
         * Возвращает true//false после вычисления.
         * @param {number} value 
         * @returns {boolean}
         */
        this.calculate = function(value){
            let arr_digits = [...(value + '')].map((value) => {return +value;} );
            let length_num = arr_digits.length;
            let pow = arr_digits.map( (value) => {
                return Math.pow(value, length_num);
            });
            let sum_pow = pow.reduce( (pV, cV) => {
                return pV + cV;
            }, 0);
            
            return sum_pow === value;
        }
    }

    /**
     * AlgorithmArmstrongNum.prototype и SomeAlgorithm.prototype 
     * могут делегировать Algorithm.prototype (Прототипное наследование). 
     */
    AlgorithmArmstrongNum.prototype = Object.create(Algorithm.prototype); 
    SomeAlgorithm.prototype = Object.create(Algorithm.prototype);

    /**
     * Связывает алгоритм с внешним вызовом.
     * @constructor
     * @param {Algorithm} algorithm 
     */
    let ArmstrongNumber = function(algorithm){
        this.algorithm = algorithm;
        /**
         * Внешняя сторона вызывает метод с
         * аргументом, сохраненный объект алгоритма
         * вызывает переобределенный интерфейсный метод
         * calculate(value)
         * @param {number} value 
         * @returns {boolean}
         */
        this.calc = function(value){
            return this.algorithm.calculate(value);
        }        
    }

    /**
     * Заменить текущий алгоритм 
     * @param {Algorithm} algorithm 
     */
    ArmstrongNumber.prototype.setAlgorithm = function(algorithm){
        this.algorithm = algorithm;
    }

    /**
     * Публичный API метод.
     * Возвращает объект (паразитка)
     * с заданным алгоритмом.
     * Алгоритм задается в операторе return:
     *         return new ArmstrongNumber(new AlgorithmArmstrongNum());
     * @returns {ArmstrongNumber}
     */
    function getArmstrongNumber(){
        return new ArmstrongNumber(new AlgorithmArmstrongNum());
    }


    var publicApi = { getArmstrongNumber };

    return publicApi;

})();


function narcissistic(value) {
    let arm_num = modAlgoritms.getArmstrongNumber();
   
    return arm_num.calc(value); 
}