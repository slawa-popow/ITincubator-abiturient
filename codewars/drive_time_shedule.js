
/**
 * Ваша задача — написать функцию, которая возвращает true, 
 * если водитель превышает дневной лимит, и false в противном случае.
 * Единственным ограничением является то, что водитель не может находиться 
 * за рулем в общей сложности более 9 часов в течение 24 часов.
 * 
 *  There will be only hours from same day,only 3 types of activites "Drive","Rest","Work"
    Limit only applies to "Drive" activity
    We assume that before and after described activities driver was resting.
 
    var dailyShedule1 = [ ["7:00-10:30","Drive"],
                        ["10:30-10:45","Rest"],
                        ["10:45-11:45","Drive"],
                        ["11:45-12:15","Rest"],
                        ["12:15-16:45","Drive"],
                        ["16:45-20:15","Work"]
                                      ]; 
            //-> should return false,9 hours of driving in total.
 */

class CalcShedule {
 
    constructor(dailyShedule) {
      this.dailyShedule = this.getCopyArgsArray(dailyShedule); // копия входного массива
      this.doing = {             // ассоциация действий водителя с методами класса
        'Drive': this.drive,
        'Work': this.work,
        'Rest': this.rest
      };
      this.driveTime = 0;
      this.restTime = 0;
      this.workTime = 0;
    }
  
    /*
     Решение задачи. 
    */
    calc() {
      for (let i of this. dailyShedule) {
        this.doing[i[1]].call(this, i[0]);
      }
  
      return !(this.driveTime <= 540);
    }
  

    // вернуть копию входного массива
    getCopyArgsArray(arr) {
      let bucket = [];
      arr.forEach(element => {
        bucket.push([...element]);
      });
      return bucket;
    }
  
    // группа методов вычисляющих кол-во минут и автосуммирующие результат
    // в соответствующие переменные
    drive(rangeTimeStr) {
      this.driveTime += this.calculateSringRangeTime(rangeTimeStr);
    }
    rest(rangeTimeStr) {
      this.restTime += this.calculateSringRangeTime(rangeTimeStr);
    }
    work(rangeTimeStr) {
      this.workTime += this.calculateSringRangeTime(rangeTimeStr);
    }
  

    // из строки: "7:00-10:30" вычислить и вернуть number разницу в минутах
    calculateSringRangeTime(rangeTime) {
      let t = rangeTime.split('-');
      let [timeFrom, timeTo] = t;
      let numFrom = timeFrom.split(':');
      let numTo = timeTo.split(':');
      return ( (((+numTo[0]) - (+numFrom[0])) * 60) + 
                 (+numTo[1]) - (+numFrom[1]) );
    }
  }
  
  /**
   * 
   * @param {Array} dailyShedule 
   */
  function shouldIBeTired(dailyShedule){
    const shd = new CalcShedule(dailyShedule);
  
    return shd.calc();
  }