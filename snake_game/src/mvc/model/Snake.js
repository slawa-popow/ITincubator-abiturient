import { Head } from "./Head";
import { Body } from "./Body";
import { Tail } from "./Tail";


export class Snake {

    constructor(headPosition, quantityBodyBlock=1) {
        this.quantityBB = quantityBodyBlock;
        this.headPosition = headPosition; // array
        this.widthBlock = null;
        this.heightBlock = null;
        
    }

    initSnake() {
        this.applesPos = [];
        this.totalPoints = 0;  
        this.speed = 0.1;
        this.dequeNodePath = [];
        this.head = new Head(this.widthBlock, this.heightBlock, ...this.headPosition);
        this.body = this.#getCreateBody();  // array objects
        this.tail = this.#getCreateTail();  // object
         
    }

    #getCreateBody() {
        // debugger;
        let body = [];
        let [x, y] = this.headPosition;
        for (let i = 0; i < this.quantityBB; i++, y--) {
            let bodyObj = new Body(this.widthBlock, this.heightBlock, x, y-1);
            body.push(bodyObj);
        }
        return body;
    }

    #getCreateTail() {
        let endBodyObj = this.body[this.body.length-1];
        let [endBodyX, endBodyY] = [endBodyObj.posX, endBodyObj.posY];
        return new Tail(this.widthBlock, this.heightBlock, endBodyX, endBodyY-1)
    }

    
}