import { ContentPage, delDecorator } from "./content_page";
import { createTitleH1 } from "../dom_ops/create_title";
import { getdiv } from "../dom_ops/getdiv";
import { svgDevice } from "../mvc/view/dev_display";
/**
 * Страница с игрой
 */
export class PlayPage extends ContentPage {

    constructor(title) {
        super(title);     // Название заголовка страницы
        this.makeContent = delDecorator(this.makeContent);  // декорированный метод this.makeContent(event)
    }


    /**
     * Здесь запускается весь код, генерирующий контент в контейнере
     * @param {Event} event 
     */
    makeContent(event) {
        let titleObj = createTitleH1.call(this, this.title);
        this.container.appendChild(titleObj);
        let gameDivContainer = getdiv("game-div-block", ["svg-game-container"]);
        gameDivContainer.innerHTML = svgDevice;
        this.container.appendChild(gameDivContainer);
    }


    /**
     * Удалить всё из контейнера контента
     */
    deleteContent() {
        super.deleteContent();
    }


}