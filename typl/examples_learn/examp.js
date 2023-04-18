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

  function ArrowGo() {
      if(this.constructor === ArrowGo){
          throw new Error('ERROR: Должен быть переопределен.');
      }
  };
  ArrowGo.prototype.goTo = function(arrow) {
      throw new Error("ERR: function of Abstract");
  }

// ------------------------------------------------------

  function GoN() {
      this.goTo = function(arrow) {
          print('СЕВЕР ', arrow);
      };
  }

  function GoS() {
      this.goTo = function(arrow) {
          print('ЮГ ', arrow);
      };
  }

  function GoW() {
      this.goTo = function(arrow) {
          print('ЗАПАД ', arrow);
      };
  }

  function GoE() {
      this.goTo = function(arrow) {
          print('ВОСТОК ', arrow);
      };
  }

// -------------------------------------------------------

  GoN.prototype = Object.create(ArrowGo.prototype);
  GoS.prototype = Object.create(ArrowGo.prototype);
  GoW.prototype = Object.create(ArrowGo.prototype);
  GoE.prototype = Object.create(ArrowGo.prototype);

// --------------------------------------------------------

  function Pole(maze) {
    this.poleKeys = {
      0: "Lost",
      1: "Dead",
      2: "Start",
      3: "Finish"
    };

    this.maze = [...maze.map( (value) => {
      return [...value];
    })];

    [this.startArr, this.finishArr] = this.findStartFinish();

    this[Symbol.iterator] = function() {
      return {
        start: this.startArr,
        finish: this.finishArr,
        next() {
          
        },
        [Symbol.iterator](){return this},
      }
    };

  }

// ----------------------------------------------------------
  Pole.prototype.findStartFinish = function() {
    const start = 2, finish = 3;
    let coordsStart = null, coordsFinish = null;
    let mazeLen = this.maze.length;
    for (let i = 0; i < mazeLen; i += 1) {
      for (let j = 0; j < mazeLen; j += 1) {
        if (coordsStart && coordsFinish) {
          return [coordsStart, coordsFinish];
        } else {
            if (this.maze[i][j] === start) {
              coordsStart = [i, j];
            }
            if (this.maze[i][j] === finish) {
              coordsFinish = [i, j];
            }
        }
      }
    }
    return [coordsStart, coordsFinish];
  } 
// ----------------------------------------------------------

  function MRunner(maze) {
      this._go = null;
      this._directions = null;
      this.pole = new Pole(maze);

      this.strategy = {
        N: new GoN(),
        S: new GoS(),
        W: new GoW(),
        E: new GoE()
      };

      Object.defineProperties(this, {
        go: {
          get: function() {
              return this._go;
          },
          set: function(arrowObj) {
              this._go = arrowObj;
              //this.pole.goTo = arrowObj;
          }
        },
        directions: {
          get: function() {
            return (this._directions != null) ? this._directions : [0];
          },
          set: function(arrDirections) {
            this._directions = [...arrDirections];
          } 
        }
      });


      this.goTo = function() {
        if (this.go) {
          this.go.goTo.call(this.pole);
        }
      }
  }

  return {MRunner};

})();

function mazeRunner(maze, directions) {
  let r = new mazerunner.MRunner(maze);
  r.directions = directions;
  
  return r.pole;
}


print(mazeRunner([
  [1,1,1,1,1,1,1],
  [1,0,0,0,0,0,3],
  [1,0,1,0,1,0,1],
  [0,0,1,0,0,0,1],
  [1,0,1,0,1,0,1],
  [1,0,0,0,0,0,1],
  [1,2,1,0,1,0,1]
], ["N","N","N","N","N","E","E","E","E","E"]));