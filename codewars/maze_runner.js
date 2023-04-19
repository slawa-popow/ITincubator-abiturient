"use strict"


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


/**
 * @module
 */
const mazerunner = (function(){

    /**
     * @interface
     * Интерфейс направления движения.
     */
    function ArrowGo() {
        if(this.constructor === ArrowGo){
            throw new Error('ERROR: Должен быть переопределен.');
        }
    };
    ArrowGo.prototype.goTo = function(arrow) {
        throw new Error("ERR: function of Abstract");
    }
  
  // ------------------------------------------------------
  /**
   * Конструкторы реализующие интерфейс ArrowGo.
   * Каждый из конструкторов реализует
   * интерфейсный метод goTo(), который возвращает
   * массив чисел (координаты i, j), которые нужно сложить с текущими
   * координатами во время прохождения по лабиринту.
   */
  
    function GoN() {
        this.goTo = function() {
            return [-1, 0];
        };
    }
  
    function GoS() {
        this.goTo = function() {
            return [1, 0];
        };
    }
  
    function GoW() {
        this.goTo = function() {
            return [0, -1];
        };
    }
  
    function GoE() {
        this.goTo = function() {
            return [0, 1];
        };
    }
  
  // -------------------------------------------------------
    /**
     * Наследоваться от абстрактного ArrowGo
     */
  
    GoN.prototype = Object.create(ArrowGo.prototype);
    GoS.prototype = Object.create(ArrowGo.prototype);
    GoW.prototype = Object.create(ArrowGo.prototype);
    GoE.prototype = Object.create(ArrowGo.prototype);
  
  // --------------------------------------------------------
  
    /**
     * @constructor
     * @param {Array} maze
     * Лабиринт. 
     */
    function Pole(maze) {
      this._go = null;  // объект направления движения
  
      this.poleKeys = {
        0: "Lost",
        1: "Dead",
        2: "Lost",
        3: "Finish"
      };
  
      // создать возможные направления для движения
      this.strategy = {
        N: new GoN(),
        S: new GoS(),
        W: new GoW(),
        E: new GoE()
      };
  
      // геттер/сеттер направления движения
      Object.defineProperties(this, {
        go: {
          get: function() {
              return this._go;
          },
          set: function(arrow) {
              this._go = this.strategy[arrow];
          }
        }
      });
  
      // копия двумерного массива, пришедшего извне
      this.maze = [...maze.map( (value) => {
        return [...value];
      })];
  
      // найти числа 2 - начало и 3 - конец в массиве.
      [this.startArr, this.finishArr] = this.findStartFinish();
      this.thisCoords = this.startArr;  // текущие координаты движения по массиву.
  
      /**
       * 
       * Итератор. Создается с контекстом pole в MRunner().
       * pole.go должен быть назначен до вызова next()
       */
      this[Symbol.iterator] = function() {
        return {
          next() {
            let [i, j] = this.go.goTo.call(this); // Вызов с контекстом pole интерфесных методов направления движения.
            this.thisCoords = [this.thisCoords[0] + i, this.thisCoords[1] + j]; // изменить координаты текущего положения
  
            // Если текущие координаты не выходят за пределы массива, вернуть значение в массиве по координатам
            if ((this.thisCoords[0] >= 0 && this.thisCoords[0] < this.maze.length) && (
              (this.thisCoords[1] >= 0 && this.thisCoords[1] < this.maze.length)
            )) {
              let result = this.maze[this.thisCoords[0]][this.thisCoords[1]];
              return {
                done: false,
                value: result
            }
            } else {
              return {
              done: true,
              value: 1
            }
            }
          },
            
          [Symbol.iterator](){return this},
        }
      };
  
    }
  
  // ----------------------------------------------------------
    /**
     * Ходим по двумерному массиву и ищем в нем числа 2 и 3.
     * Если числа найдены, то завершаем проход по массиву,
     * возвращаем координаты [i, j] чисел 2 - начала, 3 - конца.
     * @returns { Array }
     */
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
  
    /**
     * @constructor
     * @param {Array} maze 
     * Содержит массив направлений движения. (Внешняя сторона
     * должна задать массив сразу после вызова конструктора).
     * Итератор поля. (Вызов с контекстом pole).
     */
    function MRunner(maze) {
        this._directions = null;
        this.pole = new Pole(maze); // лабиринт
        // итератор по лабиринту
        this.poleIterator = this.pole[Symbol.iterator].call(this.pole);
  
        // гет/сеттеры про массив направлений
        Object.defineProperties(this, {
          directions: {
            get: function() {
              return (this._directions != null) ? this._directions : [0];
            },
            set: function(arrDirections) {
              this._directions = [...arrDirections];
            } 
          }
        });
  
        /**
         * 
         * @param {string} arrow - получить из массива направлений символ 
         * @returns {number} - число на текущем шаге в массиве
         * Задать объект задающий алгоритм направления по лабиринту.
         * Вызов next() с контекстом pole
         */
        this.nextStep = function(arrow) {
          this.pole.go = arrow;
          return this.poleIterator.next.call(this.pole).value;
        };  
    }
  
    /**
     * Итерация по массиву направлений.
     * Передать символ направления для назначения алгоритма
     * движения, сделать шаг по лабиринту (про итератор pole),
     * завершить проход в цикле, если найден, финиш, или мертв.
     * После цикла результат движений по лабиринту.
     * @returns {string}
     */
    MRunner.prototype.run = function(){
      let resultSteps = null;
      if (this.directions) {
        for (let direct of this.directions) {
          resultSteps = this.nextStep(direct);
          if ((resultSteps === 3) || (resultSteps === 1)) { break; } 
        }
  
        return this.pole.poleKeys[resultSteps];
      }
    }
  
    return {MRunner};
  
  })();
  
  
  function mazeRunner(maze, directions) {
    let r = new mazerunner.MRunner(maze);
    r.directions = directions;
    
    return r.run();
  }