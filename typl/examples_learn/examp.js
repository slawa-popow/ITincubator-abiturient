"use strict"

import { print } from "./mods/print.js";


function myRange(start, stop, step=1) { 
  return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}

function getSum(a, b) {
  console.log(a, b);
  let [aa, bb] = (a < b) ? [b, a] : [a, b];
   return myRange(aa, bb).reduce( (pV, cV) => {
    return pV + cV;
   }, 0);
}

print(getSum(0, -1));