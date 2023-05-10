/**
 * Учитывая неполный класс, представляющий связанный список объектов Node, 
 * LListрасширить LListпутем реализации средства итерации по этому списку с помощью 
 * for...ofцикла ( for...fromв Coffeescript).
 * Узлы связанного списка представляются как объекты со свойством valueи next. 
 * Уступайте valueсвойство в цикле. Классы Nodeи LListпоказаны ниже:
 */

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class LList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//     }
    
//     push(node) {
//       if (this.head === null) {
//         this.head = node;
//         this.tail = node;
//       } else {
//         this.tail.next = node;
//         this.tail = node;
//       }
//     }
//   }

// Implement a means of iterating LList with a "for...of" loop
/**
 * Занести в прототип линейного списка итератор 
 * @returns {object}
 */
LList.prototype[Symbol.iterator] = function() {
    return {
      begin: this.head,
      end: this.tail,
      next() {
        if (!this.begin) { return {done: true}}     // если голова пустая, то на выход
        else {
          let v = this.begin.value;               // иначе получить текущее значение
          if (!this.begin) {                     // с этого момента начало не начало
            return {done: true, value: v};      // если указатель на следующего null, вернуть текущее значение
          } else {
            this.begin = this.begin.next;     // иначе переписать значение текущего указателя следующим и
            return {done: false, value: v};  // вернуть значение
          }
        }
      }
    };
  }


  // ---------------- sample: -------------------------------------

// let lList = new LList();
// lList.push(new Node(37));
// lList.push(new Node(65));
// lList.push(new Node(4));

// let arr = [];
// for (let value of lList) {
//   arr.push(value);
// }
// console.log(arr); //=> [37, 65, 4]