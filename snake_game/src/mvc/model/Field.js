import { AbstractBlock } from "./AbstractBlock";
import { BasePoleBlock } from "./BasePoleBlock";   

export class Field extends BasePoleBlock {
    constructor() {
        super();
    }

    /**
     * Поместить в клетку поля объект блочного типа
     * @param {AbstractBlock} obj 
     */
    init(obj) {
        if (!(obj instanceof AbstractBlock)) {
            throw new Error("Это не наши!");
        } 
        this.type = obj;
    }


    /**
     * Очистить клетку поля
     */
    destroy() {
        this.type = null;
    }


}