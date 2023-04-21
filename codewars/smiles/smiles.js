/**
 * Учитывая массив (arr) в качестве аргумента, завершите функцию countSmileys, 
 * которая должна вернуть общее количество улыбающихся лиц.

    Правила улыбающегося лица:

    Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть отмечены как :или;
    У смайлика может быть нос, но не обязательно. Допустимые символы для носа -или~
    Каждое улыбающееся лицо должно иметь улыбающийся рот, который должен быть отмечен либо значком, )либоD
    Не допускается использование дополнительных символов, кроме упомянутых.

    Примеры допустимых смайликов: :) :D ;-D :~)
    Недопустимые смайлики: ;( :> :} :]

    Пример
    countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
    countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
    countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
 *
 */


    class Smiles {
        // допустимые символы частей лица 
        static permissionEye = [":", ";"];
        static permissionNose = ["~", "-"];
        static permissionMouth = [")", "D"];
      
        constructor(arr) {
          this.arr = arr;                                           // входной массив
          this.permissionAll = this.getAllPermissionsPartOfFace();  // все допустимые символы смайлика
          this.countSmiles = 0;                                     // счетчик улыбающихся смайликов
        }
      
        /**
         * Подсчет улыбающихся смайлов.
         * Результат задачи.
         */
        getCountSmiles() {
          for (let val of this.arr) {
            if (this.isPermissionFace(val)) {
              this.countSmiles += 1;
            }
          }
          return this.countSmiles;  
        }
      
        /**
         * 
         * @param {string} partFace символ часли лица смайла
         * @returns {boolean} допустимый символ вообще?
         */
        isPermissionPartOfFace(partFace) {
          return !(this.permissionAll.indexOf(partFace) < 0);
        }

        /**
         * 
         * @param {string} value символ часли лица смайла
         * @returns {boolean} это глаз?
         */
        isEye(value) {
          return !(Smiles.permissionEye.indexOf(value) < 0);
        }
      

        /**
         * 
         * @param {string} value символ часли лица смайла
         * @returns {boolean} это нос?
         */
        isNose(value) {
          return !(Smiles.permissionNose.indexOf(value) < 0);
        }

        
        /**
         * 
         * @param {string} value символ часли лица смайла
         * @returns {boolean} это рот?
         */
        isMouth(value) {
          return !(Smiles.permissionMouth.indexOf(value) < 0);
        }

      
        /**
         * Если длинна строки (нос по условию задачи не обязан быть) 2,
         * то нос скорее всего отсутствует и распаковываем по частям лица со
         * своим носом, иначе распаковываем как есть. Далее проверяем на длинну
         * смайла, уникальность частей лица и допустимости частей лица.
         * @param {string} face смайлик из массива вроде такого [':-D']  
         * @returns {boolean} смайлик улыбающийся?
         */
        isPermissionFace(face) {
          return [...face].every( (value, i, arr) => {
            let [eye, nose, mouth] = (arr.length === 3) ? [...arr] : [arr[0], '-', arr[1]];
            let setArr = new Set(arr);
      
            return this.isPermissionPartOfFace(value) && (setArr.size > 1 && setArr.size <= 3)
                && this.isMouth(mouth) &&
                  this.isEye(eye) && this.isNose(nose);
          });
        }
      
        /**
         * 
         * @returns {Array} массив всех допустимых символов смайла
         */
        getAllPermissionsPartOfFace() {
          return [...Smiles.permissionEye,
                 ...Smiles.permissionMouth,
                 ...Smiles.permissionNose];
        }
      
      
      }


      
      function countSmileys(arr) {
        const smiles = new Smiles(arr);
      
        return smiles.getCountSmiles();
      }
      
    //   console.log(countSmileys([':D',':~)',';~D',':)']));