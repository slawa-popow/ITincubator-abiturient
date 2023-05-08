import { Head } from "./Head";
import { Body } from "./Body";
import { Tail } from "./Tail";


/**
 * Змейка
 */
export class Snake {

    constructor(headPosition, quantityBodyBlock=1) {
        this.quantityBB = quantityBodyBlock;            // количество блоков тела
        this.headPosition = headPosition;               // Array - координаты головы
    }

    /**
     * Инициализация змеи.
     */
    initSnake() {
        this.head = new Head(...this.headPosition);     // создать объект головы
        this.currentPosition = 'stop';                  // текущее направление
        this.body = this.#getCreateBody();              // Array of objects - тело змеи
        this.tail = this.#getCreateTail();              // Object хвост
        this.directionSnake('stop');                    // Первоначальное состояние движения - стоп
        this.pause = true;     // флаг паузы
    }

    /**
     * Отдает массив текущих координат (массивов)
     * змейки
     * @returns {Array}
     */
    getPosition() {
        let posits = [this.head.getPos()]
                    .concat([this.body.map(v => {
                        return v.getPos();
                    })])
                    .concat([this.tail.getPos()]);
        return posits;
    }

    /**
     * Создать массив объектов тела змеи
     * @returns {Array}
     */
    #getCreateBody() {
        let body = [];
        let [x, y] = this.headPosition;
        for (let i = 0; i < this.quantityBB; i++, y--) {
            let bodyObj = new Body(x, y-1);
            body.push(bodyObj);
        }
        return body;
    }

    /**
     * Создать хвост
     * @returns {Object}
     */
    #getCreateTail() {
        let endBodyObj = this.body[this.body.length-1];
        let [endBodyX, endBodyY] = [endBodyObj.posX, endBodyObj.posY];
        return new Tail(endBodyX, endBodyY-1)
    }

    /**
     * Изменить направление движения головы
     * @param {string} direction 
     * @returns {undefined}
     */
    directionSnake(direction) {
        if (this.currentPosition === direction) { return; }  // если текущее направление совпадает с пришедшим
        if (direction === 'stop') {                         // то просто на выход, но если stop
            if (this.pause) {                              // то пауза
                this.head.direction = direction;          // иначе сменить направление движения
            } else {
                this.head.direction = this.currentPosition;
            }
            this.pause = !this.pause;
        } else {
            this.currentPosition = direction;                   
            this.head.direction = direction;  
        }
                        
    }

    /**
     * Создать блок тела и добавить его к змейке
     * @param {number} appleX 
     * @param {number} appleY 
     */
    addBlockToBody(appleX, appleY) {
        this.body.push(new Body(appleX, appleY));
    }


    /**
     * Шаг движения змейки
     * @returns {undefined}
     */
    step() {        
        let lenBody = this.body.length-1;
        let headCoord = this.head.getPos();
        let endBodyCoord = this.body[lenBody].getPos();
        if (this.currentPosition === 'stop') { return; }          // если стоим, то на выход
        this.head.step();                                        // сначала шаг
        this.body.unshift(this.body.pop());                     // перевернуть body 
        [this.body[0].posX, this.body[0].posY] = headCoord;    // началу body назначить коорднинаты головы до шага
        [this.tail.posX, this.tail.posY] = endBodyCoord;      // хвост - последний body
       
    }

    
}