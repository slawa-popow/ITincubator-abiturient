import { svgDevice } from "./dev_display"; 
import { getdiv } from "../../dom_ops/getdiv";
import { drawSVG } from "../../dom_ops/addgridSVG";


export class GameDisplay {

    constructor(idSVGdisplay, arrClassStyles) {
        this.idDisplay = idSVGdisplay;
        this.classStyles = [...arrClassStyles];
        this.blocksPole = {};
    
        this.valuesPole = null;
        this.pole = null;
        
        this.handlers = [
            this.upButton,
            this.rightButton,
            this.downButton,
            this.leftButton,
            this.pauseButton
        ];
        this.keyboard = [];
    }

    render(gameObjects) {
        this.clearPole();
        let head = gameObjects.head.join('#');
        let bodyArr = gameObjects.body.map(v => {
            return v.join('#');
        });
        let tail = gameObjects.tail.join('#');
       
        for (let sn of [...bodyArr, tail]) {
            this.blocksPole[sn].setAttribute('fill', 'rgba(64, 64, 64, 0.634)');
        }
         this.blocksPole[head].setAttribute('fill', 'rgb(214, 214, 248)');  // svg z-index - последний отрисовался - над всеми показался
        
    }

    clearPole() {
        for (let cell of this.valuesPole) {
            cell.setAttribute('fill', 'rgb(238, 244, 211)');
        }
    }

    initDisplay(container) {
        this.container = container;
        let div = getdiv(this.classStyles);
        div.innerHTML = svgDevice;
        this.container.appendChild(div);
        this.debugspan = document.getElementById('id-debug-string');
        [this.width, this.height] = this.getSizeDisplay();
        this.drawGrid();
        this.valuesPole = Object.values(this.blocksPole);
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
        }
    }

    upButton(event) {
        this.pole.changeDirectionSnake('up');
    }

    rightButton(event) {
        this.pole.changeDirectionSnake('right');
    }
    downButton(event) {
        this.pole.changeDirectionSnake('down');
    }
    leftButton(event) {
        this.pole.changeDirectionSnake('left');
    }
    pauseButton(event) {

    }

    getSizeDisplay() {
        this.display = document.getElementById(this.idDisplay);
        let bb = this.display.getBBox();
        return [+bb.x + (+bb.width), +bb.y + (+bb.height)];
    }

    drawGrid() {
        const VERTICAL = 20;
        const HORISONTAL = 22;
        const colorStroke = 'rgba(81, 81, 81, 0.178)';
        const colorFill = 'rgb(238, 244, 211)';
        let idI = 0, idJ = 0;

        for (let i = HORISONTAL; i < this.width; i += HORISONTAL, idI++) {
            for (let j = VERTICAL; j < this.height; j += VERTICAL) {
                let idrect = `${idI}#${idJ}`;
                let objRect = drawSVG.getSVGrect(
                    idrect,
                    i,
                    j-3,
                    HORISONTAL,
                    VERTICAL,
                    colorFill,
                    colorStroke
                    );
                this.addActionEvn(objRect);
                this.blocksPole[idrect] = objRect;
                this.display.appendChild(objRect);
                idJ++;
            }
            idJ = 0;
        }

    }

    #mouseOverHandle(obj, e) {
        obj.setAttribute('fill', 'rgba(64, 64, 64, 0.834)');
        this.debugspan.textContent = `[x, y]: [${obj.id.split('#')}]`;
    }

    #mouseOutHandle(obj, e) {
        obj.setAttribute('fill', 'rgb(238, 244, 211)');
        this.debugspan.textContent = 'x y: ';
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


    selectBlockOnPole(evn) {}


    destroy() {
        this.removeActionEvn();
        this.container = null;
    }
}