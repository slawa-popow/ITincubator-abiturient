"use strict"

import { print } from "./mods/print.js";



/**
 * Добро пожаловать, авантюрист. Ваша цель - пройти лабиринт и добраться до финиша, не касаясь стен. Это убьет вас мгновенно!
  Задача
  Вам будет предоставлен двумерный массив лабиринта и массив направлений. Ваша задача - следовать данным указаниям. Если вы достигли конечной точки до того, как все ваши ходы закончились, вы должны вернуть Finish . Если вы наткнетесь на какие-либо стены или выйдете за границу лабиринта, вы должны вернуть Dead . Если вы все еще находитесь в лабиринте после использования всех ходов, вы должны вернуть Lost .
  Массив лабиринта будет выглядеть так

  maze = [[1,1,1,1,1,1,1],
          [1,0,0,0,0,0,3],
          [1,0,1,0,1,0,1],
          [0,0,1,0,0,0,1],
          [1,0,1,0,1,0,1],
          [1,0,0,0,0,0,1],
          [1,2,1,0,1,0,1]]
  ..со следующим ключом

      0 = безопасное место для прогулок
      1 = Стена
      2 = Начальная точка
      3 = Финишная точка
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
  Правила
  1. Массив лабиринта всегда будет квадратным, т.е. N x N , но его размер и содержимое будут меняться от теста к тесту.
  2. В финальных тестах места старта и финиша будут меняться.
  3. Массив направлений всегда будет в верхнем регистре и будет иметь формат N = север, E = восток, W = запад и S = ​​юг .
  4. Если вы достигли конечной точки до того, как все ваши ходы закончились, вы должны вернуть Finish .
  5. Если вы наткнулись на любую стену или вышли за границу лабиринта, вы должны вернуть Dead .
  6. Если вы все еще находитесь в лабиринте после использования всех ходов, вы должны вернуть Lost .
 * 
 */


let mazerunner = (function(){

  function AroundGo() {
      if(this.constructor === AroundGo){
          throw new Error('ERROR: Должен быть переопределен.');
      }
  };
  AroundGo.prototype.goTo = function(around) {
      throw new Error("ERR: function of Abstract");
  }

// ------------------------------------------------------

  function GoN() {
      this.goTo = function(around) {
          print('СЕВЕР ', around);
      };
  }

  function GoS() {
      this.goTo = function(around) {
          print('ЮГ ', around);
      };
  }

  function GoW() {
      this.goTo = function(around) {
          print('ЗАПАД ', around);
      };
  }

  function GoE() {
      this.goTo = function(around) {
          print('ВОСТОК ', around);
      };
  }

// -------------------------------------------------------

  GoN.prototype = Object.create(AroundGo.prototype);
  GoS.prototype = Object.create(AroundGo.prototype);
  GoW.prototype = Object.create(AroundGo.prototype);
  GoE.prototype = Object.create(AroundGo.prototype);

// --------------------------------------------------------

  function MRunner() {
      this._go = null;
      this.strategy = {
        goN: new GoN(),
        goS: new GoS(),
        goW: new GoW(),
        goE: new GoE()
      };
      

      Object.defineProperties(this, {
        go: {
          get: function() {
              return this._go;
          },
          set: function(aroundObj) {
              this._go = aroundObj;
          }
        }
      });

      this.goTo = function(around) {
        if (this.go) {
          this.go.goTo(around);
        }
      }
  }

  return {MRunner};

})();

function mazeRunner(maze, directions) {
  let r = new mazerunner.MRunner();
  r.go = r.strategy.goE;
  r.goTo('E');
  r.goTo('E');
  r.go = r.strategy.goN;
  r.goTo('N');
  r.goTo('N');
  r.goTo('N');

  return r;
}


print(mazeRunner())