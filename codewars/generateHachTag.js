/**
 * 
 * Маркетинговая команда тратит слишком много времени на ввод хэштегов.
 * Давайте поможем им с нашим генератором хэштегов!
 * 
 * Вот сделка:

    Он должен начинаться с хэштега ( #).
    Во всех словах первая буква должна быть заглавной.
    Если окончательный результат длиннее 140 символов, он должен вернуть false.
    Если ввод или результат представляет собой пустую строку, она должна возвращаться false.
    Примеры
    " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "                  =>  "#HelloWorld"
    ""                                        =>  false
 * 
 * 
 */


/**
 * @constructor
 * @param {string} str 
 */
function GenerateHashTag(str) {
    this.str = str;
}


/**
 * 
 * @param {string} splits - строка после фильтрации 
 * @returns {boolean} - результат проверки
 */
GenerateHashTag.prototype.isEmptyStr = function(splits) {
    if ((splits.length > 0) && (splits.length < 140)){
        if (splits !== ' ') {
        return true
        }
    }
    return false;
}


/**
 * Результат задачи
 * @returns {boolean | string}
 */
GenerateHashTag.prototype.getResult = function() {
    // Отфильтровать массив из строки
    let arrStr = this.str.split(' ').filter( (value) => {
        return value;
    });
    // Собрать массив в строку и проверить на уславия
    if (!this.isEmptyStr(arrStr.join(''))){
        return false
    }
    // Результат
    let resultArr = arrStr.map( (value) => {
        let firstSym = value[0].toUpperCase();
        return firstSym + value.slice(1);
    } );

    return '#' + resultArr.join('');
}

function generateHashtag (str) {
    let getHash = new GenerateHashTag(str);
    return getHash.getResult();
}