import { ContentPage, delDecorator } from "./content_page";
import { createTitleH1 } from "../dom_ops/create_title";
import { GameDisplay } from "../mvc/view/GameDisplay";
import { Pole } from "../mvc/model/Pole";
import { Controller } from "../mvc/controller/Conrtoller";
import { createSpan } from "../dom_ops/createSpan";
import { getdiv } from "../dom_ops/getdiv";
import { segIndicator } from "../mvc/view/dev_segment";

/**
 * Страница с игрой
 */ 
export class PlayPage extends ContentPage {

    constructor(title) {
        super(title);     // Название заголовка страницы
        this.makeContent = delDecorator(this.makeContent);  // декорированный метод this.makeContent(event)

        this.displayView = new GameDisplay("gdisplay", ["style-svg-game-container"]); // отображение
        this.pole = new Pole();                                                       // модель
        this.controller = new Controller(this.pole, this.displayView);                // контроллер
    }


    /**
     * Здесь запускается весь код, генерирующий контент в контейнере
     * @param {Event} event 
     */
    makeContent(event) {
        const idIndicator = 'total-point'
        let titleObj = createTitleH1.call(this, this.title);
        this.container.appendChild(titleObj);
        
        let indicator = getdiv(['segment-indicator'], idIndicator);
        this.container.appendChild(createSpan("id-debug-string"));
        indicator.innerHTML = segIndicator;
        this.container.appendChild(indicator);
        this.controller.init(this.container);             // инициализация контроллера (см. сюда)
    }


    /**
     * Удалить всё из контейнера контента
     */
    deleteContent() {
        this.controller.destroy();
        super.deleteContent();
        this.pole.destroy();
    }


}