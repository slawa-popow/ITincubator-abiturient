import { ContentPage, delDecorator } from "./content_page";
import { createTitleH1 } from "../dom_ops/create_title";

export class HomePage extends ContentPage {

    constructor(title) {
        super(title);
        this.makeContent = delDecorator.call(this, this.makeContent);
    }

    makeContent(event) {
        let titleObj = createTitleH1(this.title);
        this.container.appendChild(titleObj);
    }

    deleteContent() {
        super.deleteContent();
    }


}