import { svgDevice } from "./dev_display"; 
import { getdiv } from "../../dom_ops/getdiv";
import { drawSVG } from "../../dom_ops/addgridSVG";


export class GameDisplay {

    constructor(idSVGdisplay, arrClassStyles) {
        this.idDisplay = idSVGdisplay;
        this.classStyles = [...arrClassStyles];
        this.blocksPole = {};

    }

    render(gameObjects) {
        let head = gameObjects.head.join('#');
        let bodyArr = gameObjects.body.map(v => {
            return v.join('#');
        });
        let tail = gameObjects.tail.join('#');
        this.blocksPole[head].setAttribute('fill', 'rgb(214, 214, 248)');
        for (let sn of [...bodyArr, tail]) {
            this.blocksPole[sn].setAttribute('fill', 'rgba(64, 64, 64, 0.634)');
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
    }


    selectBlockOnPole(evn) {}


    destroy() {
        this.removeActionEvn();
        this.container = null;
    }
}