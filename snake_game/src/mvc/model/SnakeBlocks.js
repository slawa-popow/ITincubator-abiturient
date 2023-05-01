import {BaseGameBlock} from './BaseGameBlock';
import { moveMixin } from './moveMixin';

export class SnakeBlocks extends BaseGameBlock {

    #direction = null;

    constructor(width, height, positionX, positionY) {
        super(width, height, positionX, positionY);
        this.moveState = {
            'up': this.up,
            'down': this.down,
            'left': this.left,
            'right': this.right
        };  
    }

    get direction() {
        return this.#direction;
    }

    set direction(valueStr) {
        this.#direction = (this.moveState.hasOwnProperty(valueStr)) ? this.moveState[valueStr] : null;
    }

    step() {
        this.direction();
    }
}

Object.assign(SnakeBlocks.prototype, moveMixin);