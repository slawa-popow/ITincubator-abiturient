import { Snake } from "./Snake";
import { Field } from "./Field";


/**
 * Модель.
 * Т-к я криворукий рисовальщик,
 * то подогнал размер матрицы под размер
 * svg дисплея, а не наоборот.
 */
export class Pole {

    constructor(width=22, height=25) {  
        this.observers = [];    // наблюдатели (view)     
        
        this.width = width;     // ширина матрицы (двумерный массив)
        this.height = height;   // высота матрицы
        this.matrixPole = [];   // матрица
        this.snake = null;      // змея. Только объявление. 
        this.speedSnake = 150;  // скорость движения змеи (частота отрисовки.(задержка таймера миллсек.))
        this.timer = null;      // объект таймера. Только объявление
        
    }


    /**
     * Добавить наблюдателя
     * @param {object} observer 
     */
    addObserver(observer) {
        if (this.observers.indexOf(observer) < 0) {
            this.observers.push(observer);
        }
    }


    /**
     * Исключить наблюдателя
     * @param {object} observer 
     */
    removeObserver(observer) {
        let indexObserver = this.observers.indexOf(observer);
        if (indexObserver > (-1)) {
            this.observers.splice(indexObserver, 1);
        }
    }

    stepSnake() {

    }


    /**
     * Назначить голове змеи новое направление движения
     * @param {string} strDirection 
     */
    changeDirectionSnake(strDirection) {
        this.snake.directionSnake(strDirection);
    }

    
    /**
     * Главный цикл игры.
     * @returns {timer}
     */
    startTimer() {
        let tmr = setInterval(()=>{
            let isvalid = this.isValidHeadPosition();           // голова змейки в рамках игрового поля? 
             if (this.snake.head.posY === this.height) {        //
                this.snake.directionSnake('up');                // Если голова пытается выйти за
            } else if (this.snake.head.posY <= 0) {             // игровое поле, то реверсируем
                this.snake.directionSnake('down');              // движение змеи в обратную сторону.
            } else if (this.snake.head.posX <= 0) {             //
                this.snake.directionSnake('right');             // В этой игре никто не умирает.
            } else if (this.snake.head.posX === this.width) {   //
                this.snake.directionSnake('left');
            } if (isvalid){                                     // если голова змеи в рамках игрового поля,
                this.snake.step();                              // то голова делает шаг.
            }
            
            this.notify();                                      // уведомить view о движухе в модели
            
        }, this.speedSnake);
        
        return tmr;
    }

    /**
     * Голова змеи в рамках игрового поля?
     * @returns {boolean}
     */
    isValidHeadPosition() {
        let [x, y]  = this.snake.head.getPos();
        return (((x >= 0) && (x <= this.width)) && ((y >= 0) && (y <= this.height)));
    }


    /**
     * Инициализация модели.
     * Создать змею, инициализировать змею,
     * добавить змею на игровое поле (в матрицу),
     * запустить игровой цикл.
     */
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
     * Уведомить наблюдателей (view) об изменениях модели.
     * Создается посылка (объект), в которую запечатываем
     * необходимые данные о модели, которые нужны отображению
     * (view) для отрисовки. Отображения должны иметь интерфейсный 
     * метод render(object). В этом приложении, отображению
     * в render(obj) передается всё скопом в одном объекте 
     */
    notify() {
        // debugger;
        let renderObj = {};     // создать посылку
        let snakePosits = [...this.snake.getPosition()];    // заполнить посылку
        renderObj['head'] = snakePosits[0];
        renderObj['body'] = snakePosits[1];
        renderObj['tail'] = snakePosits[2];
        
        for (let observer of this.observers) {
            observer.render(renderObj);         // отправить посылку наблюдателям
        }
   }

   /**
    * создать матрицу игрового поля модели
    */
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

    /**
     * Добавить змею в матрицу модели.
     * В соответствующую ячейку матрицы
     * вставляем части (координаты) змейки
     */
    addSnake() {
       let snakeArr = this.snake.getPosition();
       let headpos = snakeArr[0];
       this.matrixPole[headpos[0]][headpos[1]].init(this.snake.head);
       snakeArr[1].forEach((arr, i) => {
        this.matrixPole[arr[0]][arr[1]].init(this.snake.body[i]);
       });
       this.matrixPole[snakeArr[2][0]][snakeArr[2][1]].init(this.snake.head);
        
    }

    /**
     * Удалить не нужное
     */
    destroy() {
        clearInterval(this.timer);
        this.snake = null;
    }
}