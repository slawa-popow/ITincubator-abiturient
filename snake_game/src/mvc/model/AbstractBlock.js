


export class AbstractBlock {

    constructor() {
        if (new.target === AbstractBlock) {
            throw new TypeError("Cannot construct AbstractClass instances directly");
        }
        this.positionX = null;
        this.positionY = null;
        this.type = null;
    }


    init() {
        throw new Error("You must implement the abstractMethod");
    }

    destroy() {
        throw new Error("You must implement the abstractMethod");
    }
}