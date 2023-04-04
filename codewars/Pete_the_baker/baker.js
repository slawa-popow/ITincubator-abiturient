
/**
 * Напишите функцию cakes(), которая принимает рецепт (объект) 
 * и доступные ингредиенты (тоже объект) и возвращает максимальное 
 * количество пирожных, которые Пит может испечь (целое число). 
 * Для простоты нет единиц измерения количества (например, 
 * 1 фунт муки или 200 г сахара — это просто 1 или 200). 
 * Ингредиенты, отсутствующие в объектах, можно считать равными 0.
 * 
 * =============== tests: =======================================
 * must return 2
 *  cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
 *
 * must return 0
 *  cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
 */


const baker = (function(){
    /**
     * @constructor
     * хранится count - количество возможных выпечек.
     */
    function Baker(){
        this.count = 0;
    };


    /**
     * 
     * Создать и вернуть пустой (без прототипа)
     * объект. Используется как словарь (асоциат. массив).
     * @returns {Object}
     */
    Baker.prototype.dict = function(){
        return Object.create(null);
    }


    /**
     * 
     * Создается пустой объект, в который
     * заносятся ключ: значение (от аргумента) данные
     * от входного объекта. ( создается копия входного объекта).
     * Возвращается заполненный объект.
     * @param {Object} obj 
     * @returns {Object}
     */
    Baker.prototype.getDict = function(obj){
        let someDict = this.dict();
        for(let [key, value] of Object.entries(obj)){
            someDict[key] = value;
        }
        return someDict;
    }


    /**
     * 
     * @param {Object} recipe - объект рецепт 
     * @param {Object} available - объект список ингридиентов 
     * @returns {boolean} - Можно ли вообще испечь нямку имея входные ингридиенты?
     */
    Baker.prototype.isCanBake = function(recipe, available){
        for(let key in recipe){
            if(!(key in available)){
                return false;
            }
        }
        return true;
    }


    /**
     * 
     * Входные аргументы -- ссылки на объекты.
     * Рекурсивно вычитаются от значений имеющихся ингридиентов
     * значения из рецепта и если хоть одно вычисление даст результат < 0,
     * то выход из рекурсии. Иначе увеличить количесво выпечек.
     * Функция именованная и должна вызыватся с контекстом чтобы изменять счетчик
     * выпечек.
     * @param {Object} recip - объект рецепт
     * @param {Object} avail - объект список ингридиентов 
     * @returns {number} - this.count - количество сделаных выпечек.
     */
    function recursionCalkBake(recip, avail){
        for(let key in recip){
            avail[key] -= recip[key];
            if(avail[key] < 0){
                return this.count;
            } 
        }
        this.count += 1;
        return recursionCalkBake.call(this, recip, avail);
    }


    /**
     * 
     * Методу передаются входные объекты для расчета задачи.
     * Создать копии входных аргументов, проверить что вообще
     * можно что-либо испечь и передать копии рекурсивному методу (с this) для 
     * вычисления результата. Результат возвращается внешней вызывающей стороне.
     * @param {Object} recip - объект рецепт
     * @param {Object} avail - объект список ингридиентов 
     * @returns {number} - this.count - количество сделаных выпечек.
     */
    Baker.prototype.bake = function(recipe, available){
        let recip = this.getDict(recipe);
        let avail = this.getDict(available);

        if(!this.isCanBake(recip, avail)){
            return 0;
        }
    
        return recursionCalkBake.call(this, recip, avail);
    }

    
    var publicApi = {Baker}

    return publicApi;
}());


function cakes(recipe, available) {
    let x = new baker.Baker();
  return x.bake(recipe, available);
}