
/**
 * Про семисегментный индикатор
 */

export const segMethods = (function(){
    const digits = 4;
    const offColor = "fill: rgba(119, 119, 119, 0.2);";
    const onColor = "fill: rgba(253, 56, 56, 0.952);";
    const digitCode = {
        "1": [0, 0, 0, 1, 1, 0, 0],
        "2": [1, 0, 1, 1, 0, 1, 1],
        "3": [1, 0, 1, 1, 1, 1, 0],
        "4": [1, 1, 0, 1, 1, 0, 0],
        "5": [1, 1, 1, 0, 1, 1, 0],
        "6": [1, 1, 1, 0, 1, 1, 1],
        "7": [0, 0, 1, 1, 1, 0, 0],
        "8": [1, 1, 1, 1, 1, 1, 1],
        "9": [1, 1, 1, 1, 1, 1, 0],
        "0": [0, 1, 1, 1, 1, 1, 1],
        "-": [1, 0, 0, 0, 0, 0, 0],
        // "_": (0, 0, 0, 0, 0, 1, 0),
        // "a": (1, 0, 1, 0, 1, 0, 1),
        // "A": (1, 1, 1, 1, 1, 0, 1),
        // "L": (0, 1, 0, 0, 0, 1, 1),
        // "t": (1, 1, 0, 0, 0, 1, 1),
        // "p": (1, 1, 1, 1, 0, 0, 1),
        // "P": (1, 1, 1, 1, 0, 0, 1),
        // "I": (0, 1, 0, 0, 0, 0, 1),
        // "d": (1, 0, 0, 1, 1, 1, 1),
        // "r": (1, 0, 0, 0, 0, 0, 1),
        // "E": (1, 1, 1, 0, 0, 1, 1),
        // "S": (1, 1, 1, 0, 1, 1, 0),
        // "Y": (1, 1, 0, 1, 1, 1, 0),
        // "H": (1, 1, 0, 1, 1, 0, 1),
        // "u": (0, 0, 0, 0, 1, 1, 1),
        // "o": (1, 0, 0, 0, 1, 1, 1),
        // "*": (1, 1, 1, 1, 0, 0, 0),
        // "c": (1, 0, 0, 0, 0, 1, 1),
        // "C": (0, 1, 1, 0, 0, 1, 1),
        // "U": (0, 1, 0, 1, 1, 1, 1),
        // "y": (1, 1, 0, 1, 0, 1, 1),
        // "J": (0, 0, 0, 1, 1, 1, 1),
        // "F": (1, 1, 1, 0, 0, 0, 1),
        // "n": (1, 0, 0, 0, 1, 0, 1),
        // "b": (1, 1, 0, 0, 1, 1, 1),
    }

    /**
     * объекты сегментов
     * ключ - номер индикатора (с нуля)
     * значение - массив объектов svg сегментов (которые зажигаются)
     * @returns {object}
     */
    function getDigitMap() {
        let resultDict = {};
        const partId ="sym-seg-";
        for (let i = 0; i < digits; i += 1) {
            for (let j = 0; j < 7; j += 1) {
                let id = document.getElementById(partId + `${i}-${j}`);
                if (!resultDict.hasOwnProperty(i)) {
                    resultDict[i] = [];
                    resultDict[i].push(id);
                } else {
                    resultDict[i].push(id);
                }
            }
        }
        return resultDict;
    }

    /**
     * Печать одного символа
     * @param {number} numSegment 
     * @param {string} value 
     */
    function printSegment(numSegment, value) {
        let segment = getDigitMap()['' + numSegment];
        let code = digitCode['' + value];
        let counter = 0;
        
        for (let seg of code) {
            if (segment[counter]) {
                if (seg === 1) {
                segment[counter].setAttribute('style', `${onColor}`);
            } else {
                segment[counter].setAttribute('style', `${offColor}`);
            }
            counter++; 
            }
           
        }
    }

    /**
     * Печать строки
     * @param {string} strNum 
     */
    function printStr(strNum) {
        let value = '' + strNum;
        let len = value.length;
        let count = digits - len;
        for (let i = 0; i < len; i += 1, count += 1) {
            printSegment(count, value[i]);
        }
    }

    /**
     * очистить табло
     * @param {object} map 
     */
    function clearAll(map) {
        let segment = Object.values(map);
        for (let i of segment) {
            for (let obj of i) {
                if(obj) {
                  obj.setAttribute('style', `${offColor}`);  
                }
                
            }
        }
    }


    const publicApi = { getDigitMap, printSegment, printStr, clearAll, }; 
    return publicApi;
})();