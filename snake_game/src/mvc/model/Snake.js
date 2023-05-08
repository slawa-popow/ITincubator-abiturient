import { Head } from "./Head";
import { Body } from "./Body";
import { Tail } from "./Tail";


export class Snake {

    constructor(headPosition, quantityBodyBlock=1) {
        this.quantityBB = quantityBodyBlock;
        this.headPosition = headPosition; // array
        this.applesPos = [];
    }

    initSnake() {
        this.totalPoints = 0;  
        this.head = new Head(...this.headPosition);
        this.currentPosition = 'down';
        this.body = this.#getCreateBody();  // array objects
        this.tail = this.#getCreateTail();  // object
        this.directionSnake('stop'); 
    }

    getPosition() {
        let posits = [this.head.getPos()]
                    .concat([this.body.map(v => {
                        return v.getPos();
                    })])
                    .concat([this.tail.getPos()]);
        return posits;
    }

    #getCreateBody() {
        let body = [];
        let [x, y] = this.headPosition;
        for (let i = 0; i < this.quantityBB; i++, y--) {
            let bodyObj = new Body(x, y-1);
            body.push(bodyObj);
        }
        return body;
    }

    #getCreateTail() {
        let endBodyObj = this.body[this.body.length-1];
        let [endBodyX, endBodyY] = [endBodyObj.posX, endBodyObj.posY];
        return new Tail(endBodyX, endBodyY-1)
    }

    directionSnake(direction) {
        if (this.currentPosition === direction) { return; }
        this.currentPosition = direction;
        this.head.direction = direction;     
    }

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