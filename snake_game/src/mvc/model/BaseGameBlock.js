import { AbstractBlock } from "./AbstractBlock";


export class BaseGameBlock extends AbstractBlock {
    constructor(width, height, positionX, positionY) {
        super();
        this.width = width;
        this.height = height;
        this.positionX = positionX;
        this.positionY = positionY;
    }
}