

export class ABCContentPage {
    constructor() {
        if (new.target === ABCContentPage) {
            throw new TypeError("Cannot construct AbstractClass instances directly");
        }
    }

    makeContent(event) {
        throw new Error("You must implement the abstractMethod");
    }

    deleteContent() {
        throw new Error("You must implement the abstractMethod");
    }
}
