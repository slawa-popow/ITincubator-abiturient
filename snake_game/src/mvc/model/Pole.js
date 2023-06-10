import { Snake } from "./Snake";
import { Field } from "./Field";
import { Apple } from "./Apple";



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
        this.apple = null;
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
            this.recalcSnakePosition();
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
     * Очистить поле, добавить объекты заново, 
     * если голова нашла яблоко, то добавить 
     * к змейке еще блок и добавить новое яблоко
     * на поле
     */
    recalcSnakePosition() {
        for (let i = 0; i < this.width; i += 1) {
            for (let j = 0; j <= this.height; j++) {
                this.matrixPole[i][j].destroy();   
            }
        }
        let [appleX, appleY] = this.apple.getPos();
        this.addSnake();
        let [headX, headY] = this.snake.head.getPos();
        if ((headX === appleX) && (headY === appleY)) {
            this.totalPoints += 1;
            this.snake.addBlockToBody(appleX, appleY);
            [this.apple.positionX, this.apple.positionY] = this.getPositsApple();
        }
        this.matrixPole[appleX][appleY].init(this.apple);
    }


    /**
     * Инициализация модели.
     * Создать змею, инициализировать змею,
     * добавить змею на игровое поле (в матрицу),
     * запустить игровой цикл.
     */
    init() {
        this.totalPoints = 0;         // количество набранных очков в игре
        this.createFields();
        this.deniedCoordinates = this.createDeniedCoordinates(); // координаты первых полей по контуру, там нельзя вставить яблоко 
        if (this.snake == null) {
            this.snake = new Snake([12, 10], 1);
            this.snake.initSnake();
        }
        this.addSnake();
        let [randX, randY] = this.getPositsApple();
        this.apple = new Apple(randX, randY);
        this.matrixPole[randX][randY].init(this.apple);
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
        renderObj['head'] = snakePosits[0];                 // ...
        renderObj['body'] = snakePosits[1];
        renderObj['tail'] = snakePosits[2];
        renderObj['apple'] = this.apple.getPos();
        renderObj['total'] = this.totalPoints;
        
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
     * Генерировать координаты для яблока.
     * координаты не должны быть равны координатам змеи
     * и первым крайним полям игрового поля (т-к дойдя до них змея разворачивается)
     * @returns {Array}
     */
    getPositsApple() {
        let min = 0, maxX = this.width, maxY = this.height;
        let [h, b, t] = this.snake.getPosition();  // получить текущие координаты головы, тела и хвоста       
        let deniedCoords = [...this.deniedCoordinates, h, ...b, t];
        let randX = Math.floor(min + Math.random() * (maxX + 1 - min));
        let randY = Math.floor(min + Math.random() * (maxY + 1 - min));
        
        while (deniedCoords.some( v => {
            return ((randX === v[0]) && (randY === v[1]));
        } )) {
            randX = Math.floor(min + Math.random() * (maxX + 1 - min));
            randY = Math.floor(min + Math.random() * (maxY + 1 - min));
        }
        
        return [randX, randY];
    }

    /**
     * Вернуть массив координат крайних строк и столбов
     * @returns {Array}
     */
    createDeniedCoordinates() {
        let denied = [];
        
        for (let i = 0; i <= this.width; i += 1) {
            denied.push([i, 0]);
            denied.push([i, 25]);
        }
        for (let j = 0; j <= this.height; j += 1) {
            denied.push([22, j]);
            denied.push([0, j]);
        }

        return denied;
    }

    /**
     * Удалить не нужное
     */
    destroy() {
        clearInterval(this.timer);
        this.snake = null;
    }
}