/**
 * Вы, наверное, знаете систему «лайков» из Facebook и других страниц. 
 * Люди могут «лайкать» сообщения в блогах, изображения или другие элементы. 
 * Мы хотим создать текст, который должен отображаться рядом с таким элементом.
 * Реализуйте функцию, которая принимает массив, содержащий имена людей, 
 * которым понравился элемент. Он должен возвращать отображаемый текст, 
 * как показано в примерах:

 *  []                                -->  "no one likes this"
 *  ["Peter"]                         -->  "Peter likes this"
 *  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 *  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 *  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 *  Примечание. Для 4 и более имен число "and 2 others"просто увеличивается.
 */


class LikesSys {
  
    constructor(names) {
      this.names = [...names];
    }
  
    getLikeInfo() {
      let pattern = this.#getPattern();
      return pattern.call(this);  // Вызов с контекстом!!!
    }
  
    #getPattern() {
      const len = this.names.length;
      if (len === 0) { return this.#emptyNames; }
      else if (len === 1) { return this.#oneName; }
      else if (len === 2) { return this.#twoNames; }
      else if (len === 3) { return this.#threeNames; }
      else {return this.#moreNames;}
    }
  
    #emptyNames() {
      return 'no one likes this';
    }
  
    #oneName() {
      return `${this.names[0]} likes this`;
    }
  
    #twoNames() {
      let [one, two] = this.names;
      return `${one} and ${two} like this`;
    }
  
    #threeNames() {
      let [one, two, three] = this.names;
      return `${one}, ${two} and ${three} like this`
    }
  
    #moreNames() {
      let restNames = this.names.length - 2;
      let [one, two] = this.names.slice(0, 2);
      return `${one}, ${two} and ${restNames} others like this`;
    }
    
  }
  
  
  function likes(names) {
    const lk = new LikesSys(names);
    
    return lk.getLikeInfo();
  }