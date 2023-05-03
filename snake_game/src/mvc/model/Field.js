import { AbstractBlock } from "./AbstractBlock";
import { BasePoleBlock } from "./BasePoleBlock";   

export class Field extends BasePoleBlock {
    constructor() {
        super();
    }

    init(obj) {
        if (!(obj instanceof AbstractBlock)) {
            throw new Error("Это не наши!");
        } 
        this.type = obj;
    }

    destroy() {
        this.type = null;
    }


}