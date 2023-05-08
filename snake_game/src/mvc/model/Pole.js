import { Snake } from "./Snake";
import { Field } from "./Field";

export class Pole {

    constructor(width=22, height=25) {  
        this.observers = [];      
        
        this.width = width;
        this.height = height;
        this.matrixPole = [];
        this.snake = null;
        this.speedSnake = 250;
        this.timer = null;
        
    }

    addObserver(observer) {
        if (this.observers.indexOf(observer) < 0) {
            this.observers.push(observer);
        }
    }

    removeObserver(observer) {
        let indexObserver = this.observers.indexOf(observer);
        if (indexObserver > (-1)) {
            this.observers.splice(indexObserver, 1);
        }
    }

    stepSnake() {

    }

    changeDirectionSnake(strDirection) {
        this.snake.directionSnake(strDirection);
    }

    
    startTimer() {
        let tmr = setInterval(()=>{
            let isvalid = this.isValidHeadPosition(); 
             if (this.snake.head.posY === this.height) {
                this.snake.directionSnake('up');
            } else if (this.snake.head.posY <= 0) {
                this.snake.directionSnake('down');
            } else if (this.snake.head.posX <= 0) {
                this.snake.directionSnake('right');
            } else if (this.snake.head.posX === this.width) {
                this.snake.directionSnake('left');
            } if (isvalid){
                this.snake.step();
            }
            
            this.notify();
            
        }, this.speedSnake);
        
        return tmr;
    }

    isValidHeadPosition() {
        let [x, y]  = this.snake.head.getPos();
        return (((x >= 0) && (x <= this.width)) && ((y >= 0) && (y <= this.height)));
    }


    init() {
        this.createFields();
        if (this.snake == null) {
            this.snake = new Snake([12, 10], 5);
            this.snake.initSnake();
        }
        this.addSnake();
        this.timer = this.startTimer();
    }

    /**
     * Уведомить наблюдателей (view) об изменениях модели
     */
    notify() {
        // debugger;
        let renderObj = {};
        let snakePosits = [...this.snake.getPosition()];
        renderObj['head'] = snakePosits[0];
        renderObj['body'] = snakePosits[1];
        renderObj['tail'] = snakePosits[2];
        
        for (let observer of this.observers) {
            observer.render(renderObj);
        }
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
        }
    }

    addSnake() {
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