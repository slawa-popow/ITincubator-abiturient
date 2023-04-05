"use strict"

/**
 * 
 * Панграмма — это предложение, в котором каждая буква алфавита 
 * встречается хотя бы по одному разу. Например, 
 * предложение «Быстрая коричневая лиса перепрыгивает через ленивую собаку» 
 * является панграммой, потому что в нем хотя бы один раз используются 
 * буквы AZ (регистр значения не имеет).
 * Учитывая строку, определите, является ли она панграммой. 
 * Возвращает True, если это так, False, если нет. 
 * Не обращайте внимания на цифры и знаки препинания. 
 * 
 * ================= tests: ================================================
 *  const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Tests", () => {
    it("test1", () => {
        var string = "The quick brown fox jumps over the lazy dog."
        assert.strictEqual(isPangram(string), true)
    })
    it("test2", () => {
        var string = "This is not a pangram."
        assert.strictEqual(isPangram(string), false)
    });
    });
 */


/**
 * Решение основывается на том факте, что
 * если строка (все символы одного регистра и игнорируются всё кроме 
 * символов алфавита) панграмма, то длинна строки равна количеству
 * литер алфавита. Использую структуру данных "множество" чтобы
 * зауникалить каждый символ. Цифры и знаки препинания в игнор. Кавычка
 * экранирована. Длинна множества должна быть равна 26.
 * 
 * @param {string} string 
 * @returns {boolean}
 */

function isPangram(string){
    let setPangramm = new Set([...string.toLowerCase()].filter( (value) =>{
        return !(" 1234567890.,:!?()@\\'".includes(value));
    } ));
    
    return setPangramm.size === 26;
}


// console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));