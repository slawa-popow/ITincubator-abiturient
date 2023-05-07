/**
 * Напишите функцию, которая принимает один параметр, представляющий размеры шахматной доски. 
 * Доска всегда будет квадратной, поэтому 5 означает, что вам понадобится доска 5x5.
 * Темные квадраты будут представлены белым квадратом Unicode, а светлые квадраты 
 * будут представлены черным квадратом Unicode (противоположные цвета гарантируют, 
 * что доска не будет выглядеть перевернутой на темном фоне войн кодов). 
 * Он должен возвращать строку доски с пробелом между каждым квадратом и с учетом новых строк.
 * Четное число должно возвращать доску, начинающуюся с темного квадрата. 
 * Нечетное число должно возвращать доску, начинающуюся со светлого квадрата.
 * 
 * Input: 5
 * 
 * Output:
 * ■ □ ■ □ ■
 * □ ■ □ ■ □
 * ■ □ ■ □ ■
 * □ ■ □ ■ □
 * ■ □ ■ □ ■
 */


class BWboard {
    static colors = {
      'black': `\u25A0`,
      'white': `\u25A1`
    };
  
    constructor(sqare) {
      this.sqare = sqare;  // размер
    }
  
    /**
     * Вернуть values объекта static colors
     * @returns {Array}
     */
    getSquares() {
      let {black, white} = BWboard.colors;
      return [black, white];
    }
  

    /**
     * Формирует и возвращает строку из
     * чередующихся по кругу значений 
     * входного массива. 
     * Короче вернет одну строку шахматной доски
     * @param {Array} bwArr 
     * @returns {string}
     */
    getRow(bwArr) {
      let res = '';
      let arr = [...bwArr];
      for (let i = 0; i < this.sqare; i += 1) {
        res += arr[0] + ' ';
        arr.reverse();
      }
      return res.trim() + '\n';
    }
  
    /**
     * Вернуть доску в виде одной строки
     * @returns {string}
     */
    getBoard() {
      let [b, w] = this.getSquares();
      let colors = (this.sqare % 2 === 0) ? [w, b] : [b, w];
      let resBoard = '';
      for (let i = 0; i < this.sqare; i += 1) {
        resBoard += this.getRow(colors);
        colors.reverse();
      }
      return resBoard.trim();
    }
  }
  

  
  function checkeredBoard(dimension) {
    const board = new BWboard(dimension);
  
    return board.getBoard();
  }