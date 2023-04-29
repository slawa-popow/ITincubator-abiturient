import { ContentPage, delDecorator } from "./content_page";
import { createTitleH1 } from "../dom_ops/create_title";

export class PlayPage extends ContentPage {

    constructor(title) {
        super(title);
        this.makeContent = delDecorator(this.makeContent);
    }

    makeContent(event) {
        let titleObj = createTitleH1.call(this, this.title);
        this.container.appendChild(titleObj);
    }

    deleteContent() {
        super.deleteContent();
    }


}