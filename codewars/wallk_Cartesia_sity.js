
/**
 * 
 * Вы живете в городе Картезия, где все дороги выложены идеальной сеткой. 
 * Вы пришли на встречу на десять минут раньше назначенного срока, поэтому решили 
 * воспользоваться возможностью прогуляться. Город предоставляет своим горожанам 
 * приложение Walk Generating на их телефонах — каждый раз, когда вы нажимаете кнопку, 
 * оно отправляет вам массив строк из одной буквы, представляющих направления ходьбы 
 * (например, ['n', 's', 'w', «е»]). Вы всегда проходите только один квартал для каждой 
 * буквы (направления), и вы знаете, что вам потребуется одна минута, чтобы пройти один 
 * городской квартал, поэтому создайте функцию, которая будет возвращать true, если прогулка, 
 * которую предлагает вам приложение, займет у вас ровно десять минут (вы не хочу ни рано, ни поздно!) 
 * и, конечно же, вернет вас в исходную точку. В противном случае верните false .
 *
 * Примечание . Вы всегда будете получать допустимый массив, содержащий случайный набор букв 
 * направления (только «n», «s», «e» или «w»). Он никогда не даст вам пустой массив (это не прогулка, 
 * это стояние на месте!).
 * 
 * =============== tests: ===============================================================
 * const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    assert.isFalse(isValidWalk(['w']), 'should return false');
    assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

  });
});
 */




function wallkOnCartesiaSity(){

  const MAX_WALLK_TIME = 10; 
  

  /**
   * Стороны света (север, юг, запад, восток)
   * part - символ из [n, s, w, e]
   * countRepeat - количество (счетчик) повторений в входном массиве
  */
  function PartsWorld(partStr){
    this.part = partStr;
    this.countRepeat = 1;
  }



  /**
   * Увеличить счетчик повторений во входном массиве.
   * Вызывается с контекстом this
   */
  function increaseCountRepeats(){
    this.countRepeat++;
  }



  /**
   * Если атрибуты [w] и [e], а также [s] и [n]
   * существуют, то проверить что число повторений 
   * [w]=[e] и(или) [s]=[n]. Короче говоря можно
   * гулять как угодно, но количиство шагов на север
   * должно быть равно количеству шагов на юг. Аналогично
   * про запад и восто. Это значить что человек погулял и
   * вернулся в начальную точку. Также длинна входного
   * массива должна быть равна 10.
   * 
   */
  function isValidRepeat(){
    let equalN = (this?.n) ? this.n.countRepeat : null;
    let equalS = (this?.s) ? this.s.countRepeat : null;
    let equalE = (this?.e) ? this.e.countRepeat : null;
    let equalW = (this?.w) ? this.w.countRepeat : null;
    
    return (this.totalLenPath === MAX_WALLK_TIME) &&
          ((equalN === equalS ) && (equalE === equalW));
  }


  /**
   * Возврат bool работы isValidRepeat 
   * 
   */
  function isCanWalk(walk){
    let countPartsObject = getObjectCountParts(walk);

    return isValidRepeat.call(countPartsObject);
  }



  /**
   * Создается объект (countParts) подсчитывающий количество 
   * повторений символов входного массива.
   * В поцессе итерации по входному массиву в countParts
   * добавляются атрибуты [символ стороны света: объект стороны света].
   * Возвращает заполненный countParts.
   */
  function getObjectCountParts(walk) {
    let countParts = {
      totalLenPath: walk.length,
    };

    for (let i of walk){
      if (!countParts.hasOwnProperty(i)){
        countParts[i] = new PartsWorld(i);
      } else {
        increaseCountRepeats.call(countParts[i]);
      }
    }

    return countParts;  
  }

  
  var publicApi = {isCanWalk};
  return publicApi;
}



function isValidWalk(walk) {
  
  let walkOn = wallkOnCartesiaSity();
  let result = walkOn.isCanWalk(walk);

  return result;
}