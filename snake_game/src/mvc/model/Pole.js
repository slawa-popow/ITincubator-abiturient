import { Snake } from "./Snake";
import { Field } from "./Field";

export class Pole {

    constructor(view, width=22, height=25) {        
        this.view = view;
        this.width = width;
        this.height = height;
        this.matrixPole = [];
        this.snake = null;
        this.speedSnake = 100;
        this.timer = null;

        this.t = 0;
    }

    
    startTimer() {
        let tmr = setInterval(()=>{
            
            if (this.isValidHeadPosition()){
              this.snake.head.step();  
            } else if (this.snake.head.posY === this.height) {
                this.snake.head.direction = 'up';
                this.t = 0;
                this.snake.head.step();
            } else if (this.snake.head.posY === 0) {
                this.snake.head.direction = 'down';
                this.t = 0;
                this.snake.head.step();
            }
            
            this.view.render(this.execute());
        }, this.speedSnake);
        
        return tmr;
    }

    isValidHeadPosition() {
        let [x, y]  = this.snake.head.getPos();
        return (((x > 0) && (x < this.width)) && ((y > 0) && (y < this.height)));
    }


    init() {
        this.createFields();
        if (this.snake == null) {
            this.snake = new Snake([12, 8], 2);
            this.snake.initSnake();
        }
        this.addSnake();
        this.timer = this.startTimer();
    }

   execute() {
    let renderObj = {};
    let snakePosits = this.snake.getPosition();
    renderObj['head'] = snakePosits[0];
    renderObj['body'] = snakePosits[1];
    renderObj['tail'] = snakePosits[2];
    renderObj['t'] = this.t++;

    return renderObj;
   }

    createFields() {
        for (let i = 0; i <= this.width; i++) {
            let iArr = [];
            for (let j = 0; j <= this.height; j++) {
                let field =  new Field();
                field.positionX = i;
                field.positionY = j;
                iArr.push(field)
            }
            this.matrixPole.push([...iArr]);
            // iArr.length = 0;
        }
    }

    addSnake() {
        //debugger;
       let snakeArr = this.snake.getPosition();
       let headpos = snakeArr[0];
       this.matrixPole[headpos[0]][headpos[1]].init(this.snake.head);
       snakeArr[1].forEach((arr, i) => {
        this.matrixPole[arr[0]][arr[1]].init(this.snake.body[i]);
       });
       this.matrixPole[snakeArr[2][0]][snakeArr[2][1]].init(this.snake.head);
        
    }

    destroy() {
        clearInterval(this.timer);
        this.snake = null;
        
    }
}