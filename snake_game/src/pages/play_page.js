import { ContentPage, delDecorator } from "./content_page";
import { createTitleH1 } from "../dom_ops/create_title";
import { GameDisplay } from "../mvc/view/GameDisplay";
import { Pole } from "../mvc/model/Pole";

/**
 * Страница с игрой
 */
export class PlayPage extends ContentPage {

    constructor(title) {
        super(title);     // Название заголовка страницы
        this.makeContent = delDecorator(this.makeContent);  // декорированный метод this.makeContent(event)

        this.displayView = new GameDisplay("gdisplay", ["style-svg-game-container"]);
        this.pole = new Pole();
    }


    /**
     * Здесь запускается весь код, генерирующий контент в контейнере
     * @param {Event} event 
     */
    makeContent(event) {
        let titleObj = createTitleH1.call(this, this.title);
        this.container.appendChild(titleObj);
        this.displayView.initDisplay(this.container);
        this.pole.init(...this.displayView.getSizeDisplay());

        console.log(this.pole);
    }


    /**
     * Удалить всё из контейнера контента
     */
    deleteContent() {
        this.displayView.destroy();
        super.deleteContent();
    }


}