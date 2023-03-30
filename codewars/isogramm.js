/**
 * Изограмма — это слово, в котором нет повторяющихся букв, 
 * последовательных или непоследовательных. 
 * Реализуйте функцию, определяющую, является ли строка, 
 * содержащая только буквы, изограммой. 
 * Предположим, что пустая строка является изограммой. 
 * Игнорировать регистр букв.
 * 
 * ==================== tests: =================================
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});
 */


function isIsogram(str){
    let lowerCaseStr = str.toLowerCase();
    let uniqueSymbols = new Set(lowerCaseStr);
    
    return uniqueSymbols.size === lowerCaseStr.length;    
  }