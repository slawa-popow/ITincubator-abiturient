"use strict"
// http://127.0.0.1:5500/typl/examples_learn/exam.html

import { print } from "./mods/print.js";

function squareSum(numbers){
  return numbers.reduce( (pv, cv) => {
    return pv + cv**2;
  }, 0);
}

print(squareSum(
  []
));