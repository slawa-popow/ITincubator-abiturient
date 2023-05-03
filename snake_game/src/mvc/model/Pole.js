import { Snake } from "./Snake";
import { Field } from "./Field";

export class Pole {

    constructor(view, width=22, height=25) {        
        this.view = view;
        this.width = width;
        this.height = height;
        this.matrixPole = [];
        this.snake = null;
        
    }

    

    init() {
        this.createFields();
        if (this.snake == null) {
            this.snake = new Snake([12, 8], 2);
            this.snake.initSnake();
        }
        this.addSnake();
        this.execute();
    }

   execute() {
    let renderObj = {};
    let snakePosits = this.snake.getPosition();
    renderObj['head'] = snakePosits[0];
    renderObj['body'] = snakePosits[1];
    renderObj['tail'] = snakePosits[2];

    this.view.render(renderObj);
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
        for (let field of this.matrixPole) {
            for (let obj of field) {
                obj.destroy();
            }
            field.length = 0;
        }
    }
}