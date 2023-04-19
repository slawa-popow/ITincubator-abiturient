/**
 * Были дни на уроках математики, когда мне хотелось иметь простой 
 * способ быстро найти любую заданную переменную в формуле и 
 * соответствующим образом проверить свои ответы. 

    Ну что ж! Во всяком случае, используя следующую формулу:

    Angle (in Radians) === Arc length / Radius length
    Напишите функцию thetaFormula:

    При задании двух значений и "?" возвращает числовое значение отсутствующего.
    Когда заданы все три значения, возвращается логическое значение, проверяющее, 
    является ли утверждение истинным или ложным.
    Если в качестве аргументов задано одно значение или нет, или недействительные 
    аргументы возвращают значение null.
    Например:

        thetaFormula("?", 12, 35)        -->    0.343
        thetaFormula(3, "?", 14)         -->    42
        thetaFormula(5, 16, "?")         -->    3.2

        thetaFormula(2, 5, 7)            -->    false
        thetaFormula(2, 20, 10)          -->    true
        thetaFormula( -1, 1, -1)         -->    true

        thetaFormula(1, 2)               -->   null
        thetaFormula(1)                  -->   null
        thetaFormula()                   -->   null
        thetaFormula("?", "?", 2)        -->   null

    Если возвращаемое значение содержит более трех цифр после запятой, 
    оно должно быть зафиксировано до трех знаков после запятой. Функция должна иметь возможность возвращать отрицательные значения, они будут проверены.
 */

/**
 * 
 * angle === arc / radius
 */

const thetaf = (function() {

  

    function Formula() {}
  
    Formula.IsTrueFalse = function() {
      this.calculate = function(argsArr) {
        if (argsArr.length === 3 && typeof argsArr[0] !== 'string' && typeof argsArr[1] !== 'string' &&
        typeof argsArr[2] !== 'string'){
          let [radius, arc, angle] = argsArr;
          return angle === Math.floor(arc / radius);
        }
        else {
          return null;
        }
      };
    };
  
    Formula.CalculateFormula = function() {
      this.calculate = function(argsArr) {
        let re = /\?/g;
        let result = null;
        if ((argsArr.length === 3) && (argsArr.join('').match(re).length === 1)) {
          let [radius, arc, angle] = argsArr;
          if (radius === '?') {
            result = (arc / angle);
            return (result % 1 === 0) ? result : parseFloat(result.toFixed(3));
          }
          else if (arc === '?') {
            result = (radius * angle);
            return (result % 1 === 0) ? result : parseFloat(result.toFixed(3));
          }
          else if (angle === '?') {
            result = (arc / radius);
            return (result % 1 === 0) ? result : parseFloat(result.toFixed(3));
          }
        } else {
          return result;
        }
      };
    };
  
    Formula.prototype.calculate = function() {
      throw new Error("ERR: function of Abstract");
    }
  
    Formula.factory = function(type) {
      let constructorFactory = type;
      let returnObject = null;
      // debugger;
      if (typeof Formula[constructorFactory].prototype.calculate !== 'function') {
        Formula[constructorFactory].prototype = new Formula();
      }
  
      returnObject = new Formula[constructorFactory]();
      return returnObject;
    }
  
    function FactoryClient(argsArr) {
      this.args = [...argsArr] || null;
      this.algorithm = Formula.factory(this.getTypeCalc(this.args));
    }
  
    FactoryClient.prototype.getTypeCalc = function(args) {
      if (args) {
        let reAsk = /[?]/g;
        
        if (reAsk.test(args.join(''))) {
          return 'CalculateFormula';
        } else {
          return 'IsTrueFalse';
        }
      }
      return null;
    }
  
    return { FactoryClient };
  })();
  
  
  function thetaFormula(radius, arc, angle) {
    let args = [radius, arc, angle].filter( (v) => {
      return v != null;
    });
    // debugger;
    let calc = new thetaf.FactoryClient(args);
    return calc.algorithm.calculate(args);
  }