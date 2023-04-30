import { ABCContentPage } from "./abstract_page_cls";

export class ContentPage extends ABCContentPage {
    constructor(titleStr) {
        super();
        this.container = null;
        this.title = titleStr;
    }

    makeContent(event) {}

    deleteContent() {
        for (let domElem of Array.from(this.container.children)) {
            this.container.removeChild(domElem);
        }
    }

}

// -------------------- Decorator ----------------------------------

export function delDecorator(makeMethod) {
    return function(evn) {
        this.deleteContent();
        makeMethod.call(this, evn);  // c контекстом
    };
} 

// -----------------------------------------------------------------