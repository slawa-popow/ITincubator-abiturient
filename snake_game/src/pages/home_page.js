import { ContentPage, delDecorator } from "./content_page";
import { createTitleH1 } from "../dom_ops/create_title";
import { createP } from "../dom_ops/createP";
import { createUL } from "../dom_ops/createUL";

/**
 * Главная страница
 */
export class HomePage extends ContentPage {

    constructor(title) {
        super(title);  // Название заголовка страницы
        this.makeContent = delDecorator(this.makeContent);  // декорированный метод this.makeContent(event)
    }


    /**
     * Здесь запускается весь код, генерирующий контент в контейнере
     * @param {Event} event 
     */
    makeContent(event) {
        let titleObj = createTitleH1.call(this, this.title);
        this.container.appendChild(titleObj);
        this.container.appendChild(createP(
            "Это игра змейка. Проект делается в рамках изучения мной основ программирования на языке javascript."
        ));
        this.container.appendChild(createP(
            "Использовано:"
        ));
        this.container.appendChild(createUL(
            [
                "ES6 ООП",
                "Node.js 18x",
                "webpack",
                "SVG графика"
            ],
            "ul"
        ));
        this.container.appendChild(createP(
            "Модификация DOM html и SVG осуществляется посредством стандартных методов, без использования сторонних библиотек."
        ));
        this.container.appendChild(createP(
            "Приложение состоит из 2 страниц: этой и самой игры. Страницы формируются и очищаются динамически в div контейнере. Иконки выше - навигация по страницам. "
        ));
    }

    /**
     * Удалить всё из контейнера контента
     */
    deleteContent() {
        super.deleteContent();
    }


    
}