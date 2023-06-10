import { AbstractBlock } from "./AbstractBlock";


export class BaseGameBlock extends AbstractBlock {
    constructor(positionX, positionY) {
        super();
        
        this.positionX = positionX;
        this.positionY = positionY;
    }

    getPos() {
        return [this.positionX, this.positionY];
    }
} 