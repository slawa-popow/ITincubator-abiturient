import { svgDevice } from "./dev_display"; 
import { getdiv } from "../../dom_ops/getdiv";
import { getSVGLine } from "../../dom_ops/addgridSVG";

export class GameDisplay {

    constructor(idSVGdisplay, arrClassStyles) {
        this.idDisplay = idSVGdisplay;
        this.classStyles = [...arrClassStyles];
        
    }

    initDisplay(container) {
        this.container = container;
        let div = getdiv(this.classStyles);
        div.innerHTML = svgDevice;
        this.container.appendChild(div);
        [this.width, this.height] = this.getSizeDisplay();
        this.display.appendChild(getSVGLine(
            this.width/2, 15, this.width/2, this.height, "rgba(81, 81, 81, 0.178)"
        ));
    }

    getSizeDisplay() {
        this.display = document.getElementById(this.idDisplay);
        let bb = this.display.getBBox();
        return [+bb.x + (+bb.width), +bb.y + (+bb.height)];
    }

    destroy() {
        this.container = null;
    }
}