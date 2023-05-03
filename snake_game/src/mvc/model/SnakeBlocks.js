import {BaseGameBlock} from './BaseGameBlock';
import { moveMixin } from './moveMixin';

export class SnakeBlocks extends BaseGameBlock {

    #direction = null;

    constructor(positionX, positionY) {
        super(positionX, positionY);
        this.moveState = {
            'up': this.up,
            'down': this.down,
            'left': this.left,
            'right': this.right
        };  
    }

    getPos() {
        return [this.posX, this.posY];
    }

    get posX() {
        return this.positionX;
    }

    set posX(newPos) {
        this.positionX = parseInt(newPos);
    }

    get posY() {
        return this.positionY;
    }

    set posY(value) {
        this.positionY = parseInt(value);
    }

    get direction() {
        return this.#direction;
    }

    set direction(valueStr) {
        this.#direction = (this.moveState.hasOwnProperty(valueStr)) ?
                           this.moveState[valueStr] : null;
    }

    step() {
        if (!this.direction) {
            throw new Error('Не назначен метод this.direction');
        }
        this.direction();
    }
}

// Впрыснуть миксин в прототип класса (BaseGameBlock)
Object.assign(SnakeBlocks.prototype, moveMixin);