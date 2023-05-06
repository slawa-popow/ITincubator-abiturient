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

    directionSnake(direction) {
        let sn = [this.head, ...this.body, this.tail];
        if (this.currentPosition === direction) { return; }
        this.currentPosition = direction;
        sn.forEach(s => {
                    s.direction = this.currentPosition;
                });
        // debugger;
        let head = this.head.getPos();
        let tail = this.tail.getPos();
        if (this.currentPosition === 'down') {
              this.upPos(head, tail);
        } else if (this.currentPosition === 'up') {
               this.dwnPos(head, tail);  
            }
    }


    upPos(head, tail) {
        if (head[1] > tail[1]){
            [this.head.posX, this.head.posY] = head;
            [this.tail.posX, this.tail.posY] = tail; 
        } else {
            [this.head.posX, this.head.posY] = tail;
            [this.tail.posX, this.tail.posY] = head; 
        }
    }

    dwnPos(head, tail) {
        if (head[1] < tail[1]){
            [this.head.posX, this.head.posY] = head;
            [this.tail.posX, this.tail.posY] = tail; 
        } else {
            [this.head.posX, this.head.posY] = tail;
            [this.tail.posX, this.tail.posY] = head;  
        } 
    }


    step() {
        let sn = [this.head, ...this.body, this.tail];
        sn.forEach(s => {
            s.step();
        }); 
    }

    
}