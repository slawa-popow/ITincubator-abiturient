// Учитывая целое число, определите, является ли оно квадратным числом :
// В математике квадратное число или идеальный квадрат — 
// это целое число, являющееся квадратом целого числа;
// другими словами, это произведение некоторого целого числа на самого себя.
// В тестах всегда будет использоваться некоторое целое число, 
// так что не беспокойтесь об этом в языках с динамической типизацией.

// Примеры
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

const square = (function(){
    function isValid(num) {
      return num >= 0;
    }
  
    function numIsSquare(num) {
      return Math.sqrt(num) % 1 === 0;
    }
  
    var publicApi = { isValid, numIsSquare };
    return publicApi;
  })();
  
  
  var isSquare = function(n){
    if (square.isValid(n)) {
      if (n === 0) { return true; }
      return square.numIsSquare(n);
    }
    return false; 
  }
  


// ------------------ tests ---------------------
//   let numbs = [-1, 0, 3, 4, 25, 26];
  
//   numbs.forEach( (v) => {
//     console.log(`${v} sq 2 = ${isSquare(v)}`);
//   });