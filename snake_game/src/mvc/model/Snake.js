import { Head } from "./Head";
import { Body } from "./Body";
import { Tail } from "./Tail";


export class Snake {

    constructor(headPosition, quantityBodyBlock=1) {
        this.quantityBB = quantityBodyBlock;
        this.headPosition = headPosition; // array
        
    }

    initSnake() {
        this.applesPos = [];
        this.totalPoints = 0;  
        this.dequeNodePath = [];
        this.head = new Head(...this.headPosition);
        this.head.direction = 'down';
        this.body = this.#getCreateBody();  // array objects
        this.tail = this.#getCreateTail();  // object
         
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
        // debugger;
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

    
}