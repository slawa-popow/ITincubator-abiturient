import { svgDevice } from "./dev_display"; 
import { getdiv } from "../../dom_ops/getdiv";
import { drawSVG } from "../../dom_ops/addgridSVG";
import { segMethods } from "./segment_methods";
/**
 * Отображение View.
 * 
 */ 
export class GameDisplay {

    constructor(idSVGdisplay, arrClassStyles) {
        this.idDisplay = idSVGdisplay;              // id дисплея
        this.classStyles = [...arrClassStyles];     // стили css для позиционирования дисплея
        this.blocksPole = {};                       // ячейки svg (rect) {id-rect: svg rect}
    
        this.valuesPole = null;                     // все объекты svg-rect
        this.pole = null;                           // модель
        this.controller = null;                     // контроллер
        
        this.handlers = [                           // массив ссылок на методы событий клавиш клавиатуры
            this.upButton,
            this.rightButton,
            this.downButton,
            this.leftButton,
            this.pauseButton
        ];
        this.keyboard = [];                         // svg объекты кнопок на картинке
        
    }


    /**
     * Интерфейсный метод.
     * Принимает посылку от модели для перерисовки
     * @param {Object} gameObjects 
     */
    render(gameObjects) {
        this.clearPole();                           // очистить поле
        let head = gameObjects.head.join('#');      // координаты объектов связанные # ('4#12') - id ячейки rect svg
        let bodyArr = gameObjects.body.map(v => {
            return v.join('#');
        });
        let tail = gameObjects.tail.join('#');
        // далее отрисовать змейку
        for (let sn of [...bodyArr, tail]) {
            this.blocksPole[sn].setAttribute('fill', 'rgba(64, 64, 64, 0.634)');  // цвет тела
        }
        this.blocksPole[head].setAttribute('fill', 'rgba(45, 130, 220, 0.637)');  // svg z-index - последний отрисовался - над всеми показался
        let apple = gameObjects['apple'].join('#');
        this.blocksPole[apple].setAttribute('fill', 'rgba(11, 101, 1, 0.448)');  // цвет яблока
        this.viewTotalPoints(gameObjects['total']);  // очки
        segMethods.clearAll(segMethods.getDigitMap());
        segMethods.printStr(('' + gameObjects['total']).padStart(4,'0'));
    }


    /**
     * очистить поле. Изменить цвет всех ячеек на какой-нибудь один
     */
    clearPole() {
        for (let cell of this.valuesPole) {
            cell.setAttribute('fill', 'rgb(238, 244, 211)');
        }
    }

    /**
     * Инициализировать отображение
     * @param {HTMLObjectElement} container 
     */
    initDisplay(container, controller) {
        this.controller = controller;                               // контроллер mvc
        this.container = container;                                 // объект главного div контейнера
        let div = getdiv(this.classStyles);                         // далее создать и отрисовать svg дисплей,
        div.innerHTML = svgDevice;                                  // создать отладочный span, получить размеры поля,
        this.container.appendChild(div);                            // 
        this.debugspan = document.getElementById('id-debug-string');
        [this.width, this.height] = this.getSizeDisplay();
        this.drawGrid();                                            // отрисовать сетку (создать много svg rect)
        this.valuesPole = Object.values(this.blocksPole);           // получить отдельно ячейки (объекты svg rect)
        // инициализировать клавиатуру на svg дисплее
        this.keyboard = this.initKeyboard("up-button", "right-button", "down-button", "left-button", "pause");
    }

    initKeyboard(...idButtons) {
        let buttons = [];
        // debugger; 
        if (idButtons.length === this.handlers.length) {
            idButtons.forEach( (v, i, _) => {
                let domObj = document.getElementById(v);
                domObj.addEventListener('click', this.handlers[i].bind(this));
                buttons.push(domObj);
            });
            document.addEventListener('keydown', this.keyboardArrows.bind(this));
        }

        return buttons;
    }

    keyboardArrows(event) { 
        switch(event.key){
            case "ArrowLeft":  // если нажата клавиша влево
                this.leftButton(event);
                break;
            case "ArrowUp":   // если нажата клавиша вверх
                this.upButton(event);
                break;
            case "ArrowRight":   // если нажата клавиша вправо
                this.rightButton(event);
                break;
            case "ArrowDown":   // если нажата клавиша вниз
                this.downButton(event);
                break;
            case " ":      // если нажата клавиша пробел
                this.pauseButton(event);
                break;
        }
    }

    // ------------------------ обработчики кнопок клавиатуры и svg кнопок ------------
    // Все попытки изменения состояния модели только через контроллер!
    upButton(event) {
        this.controller.setDirectionSnake('up');
    }

    rightButton(event) {
        this.controller.setDirectionSnake('right');
    }
    downButton(event) {
        this.controller.setDirectionSnake('down');
    }
    leftButton(event) {
        this.controller.setDirectionSnake('left');
    }
    pauseButton(event) {
        this.controller.setDirectionSnake('stop');
    }

    
    // --------------------------------------------------------------------------------

    /**
     * Получить координаты прямоугольника svg - игрового поля,
     * в который вставляются svg rect ячейки 
     * @returns {Array}
     */
    getSizeDisplay() {
        this.display = document.getElementById(this.idDisplay);  // объект группы g svg поля игры
        let bb = this.display.getBBox();
        return [+bb.x + (+bb.width), +bb.y + (+bb.height)];
    }


    /**
     * Отрисовать сетку (ячейки svg rectangle)
     */
    drawGrid() {
        const VERTICAL = 20;
        const HORISONTAL = 22;
        const colorStroke = 'rgba(81, 81, 81, 0.178)';
        const colorFill = 'rgb(238, 244, 211)';
        let idI = 0, idJ = 0;

        for (let i = HORISONTAL; i < this.width; i += HORISONTAL, idI++) {
            for (let j = VERTICAL; j < this.height; j += VERTICAL) {
                let idrect = `${idI}#${idJ}`;       // id ячейки - координатаX#координатаY 
                // создать svg rect ячейку
                let objRect = drawSVG.getSVGrect(
                    idrect,
                    i,
                    j-3,
                    HORISONTAL,
                    VERTICAL,
                    colorFill,
                    colorStroke
                    );
                this.addActionEvn(objRect);         // обработчик по наведению и уводу указателя мыши на ячейке
                this.blocksPole[idrect] = objRect;  
                this.display.appendChild(objRect);  // добавить ячейку как дочерний элемент в group svg (иначе не покажется)
                idJ++;
            }
            idJ = 0;
        }

    }

    viewTotalPoints(total) {
        this.debugspan.textContent = `Очки: ${total}`;
    }

    #mouseOverHandle(obj, e) {
        obj.setAttribute('fill', 'rgba(64, 64, 64, 0.834)');
        this.debugspan.textContent = `[x, y]: [${obj.id.split('#')}]`;
    }

    #mouseOutHandle(obj, e) {
        obj.setAttribute('fill', 'rgb(238, 244, 211)');
        this.debugspan.textContent = 'Очки: ';
    }


    addActionEvn(obj) {
        obj.onmouseover = this.#mouseOverHandle.bind(this, obj);
        obj.onmouseout = this.#mouseOutHandle.bind(this, obj);
    }

    removeActionEvn() {
        for (let [id, obj] of Object.entries(this.blocksPole)) {
            obj.removeEventListener('mouseover', this.#mouseOverHandle);
            obj.removeEventListener('mouseout', this.#mouseOutHandle);
            this.blocksPole[id] = null;
            delete this.blocksPole[id];
        }
        if (this.keyboard.length !== 0) {
          this.keyboard.forEach( (v, i, _) => {
            v.removeEventListener('click', this.handlers[i]);
            
        });
          document.removeEventListener('keydown', this.keyboardArrows);
        }
        
    }


    destroy() {
        this.removeActionEvn();
        this.container = null;
    }
}