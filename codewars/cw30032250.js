"use strict"

// import { print } from "./somefolder/mod.js"


/**
 * Напишите функцию, которая будет принимать 
 * последовательность чисел и вычислять дисперсию 
 * для этой последовательности. Дисперсия для набора 
 * чисел находится путем вычитания среднего значения 
 * из каждого значения, возведения результатов в квадрат, 
 * их сложения и деления на количество элементов.
 */

function dispersedSeries(){
  /**
   * 
   * @param {*} rowNumbers Входная последовательность чисел. 
   *                       Массив.
   * @returns длинна последовательности
   */
  function getTotalLength(rowNumbers){
    return rowNumbers.length;
  }

  /**
   * 
   * @param {*} rowNumbers Входная последовательность чисел. 
   *                       Массив.
   * @returns Среднее арифметическое чисел массива.
   */
  function averageSum(rowNumbers){
    return rowNumbers.reduce((pV, cV) => {
        return pV + cV;
      }, 0) / getTotalLength(rowNumbers);
  }


  /**
   * 
   * @param {*} rowNumbers Входная последовательность чисел. 
   *                       Массив.
   * @returns Массив отклонений от среднего арифметического
   */
  function getDeviation(rowNumbers){
    return rowNumbers.map((value) => {
      return value - averageSum(rowNumbers);
    });
  }


  /**
   * 
   * @param {*} rowNumbers Входная последовательность чисел. 
   *                       Массив.
   * @returns дисперсия.
   */
  function getDispersion(rowNumbers){
    return getDeviation(rowNumbers).reduce((pV, cV) => {
      return pV + (cV * cV);
    }, 0) / getTotalLength(rowNumbers);
  }

  var publicApi = {
    getDispersion      
  }

  return publicApi;
} 


var variance = function(numbers) {
  let dispers = dispersedSeries();
  
  return dispers.getDispersion(numbers);
};


