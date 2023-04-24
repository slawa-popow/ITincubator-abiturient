/**
 * 
 * У вас есть массив целых чисел и лягушка на первой позиции
 * [Frog, int, int, int, ..., int]
 * Само целое число может сказать вам длину и направление прыжка.
 * For instance:
 * 2 = jump two indices to the right
 * -3 = jump three indices to the left
 * 0 = stay at the same position
 * Ваша цель — найти, сколько прыжков нужно, чтобы выпрыгнуть из массива.
 * Возврат -1, если лягушка не может выпрыгнуть из массива
 * Example:
 * array = [1, 2, 1, 5]; 
 * jumps = 3  (1 -> 2 -> 5 -> <jump out>)
 */


class Pole{

    constructor(arr) {
      this._arr = arr || [];
    }
  
    nextStep(step) {
      return this.arr[step];
    }
  
    get arr() {
      return this._arr;
    }
  }
  
  
  class Frog {
    
    constructor(pole) {
      this.pole = pole;
      this.arr = [...pole.arr];
      this.counter = 1;
      this.position = this.pole.nextStep(0);
      this.countSteps = 0;
    }
  
    run() {
      while (this.pole.nextStep(this.position) != null) {
        this.counter++;
        this.position += this.pole.nextStep(this.position);
        this.countSteps++;
        if (this.countSteps > this.arr.length) {
          return -1;
        }
      }
      return this.counter;
    }
  
  }
  
  
  function solution(a) {
    const pole = new Pole(a);
    const frog = new Frog(pole);
    
    return frog.run();
  }