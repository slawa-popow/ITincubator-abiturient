"use strict"

/**
 * Создайте функцию, которая обрезает строку (первый указанный аргумент), 
 * если она длиннее запрошенной максимальной длины строки (второй заданный аргумент). 
 * Результат также должен заканчиваться на "..."
 * Эти точки в конце также увеличивают длину строки.
 * Например, trim("Creating kata is fun", 14)должен вернуться"Creating ka..."
 * Если строка меньше или равна максимальной длине строки, просто верните строку без обрезки или точек.
 * например, trim("Code Wars is pretty rad", 50)должен вернуться"Code Wars is pretty rad"
 * Если запрошенная длина строки меньше или равна 3 символам, то длина точек не добавляется к длине строки.
 * например , trim("He", 1)должен вернуть "H...", потому что 1 <= 3
 * Запрошенная максимальная длина будет больше 0. Входная строка не будет пустой.
 * 
 * ================= tests: =====================================
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;
    describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
        assert.strictEqual(trim("Creating kata is fun", 14),"Creating ka...");
        assert.strictEqual(trim("He", 1),"H...");
        assert.strictEqual(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");
    });
    });
 */



function trim(str, size) {
    console.log(str, size);
    if (str.length <= size){
      return str;
    }
    else if ((str.length <= 3)){
      return str.slice(0, size)+'...';
    }
    else {
      let resultStr = str.slice(0, size);
      return  (resultStr.length > 3) ? 
        resultStr.slice(0, resultStr.length-3) + '...' : resultStr + '...';
    }
  }