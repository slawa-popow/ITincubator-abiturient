import { ABCContentPage } from "./abstract_page_cls";

/**
 * Базовый класс динамически генерируемых страниц
 */
export class ContentPage extends ABCContentPage {

    /**
     * @constructor
     * @param {string} titleStr - Заголовок страницы <h1> 
     */
    constructor(titleStr) {
        super();
        this.container = null;  // объект div контейнера (назначается в Navigator.init())
        this.title = titleStr;
    }


    /**
     * Наследники выполняют код, генерирующий dom в контейнере.
     * Здесь метод пуст.
     * @param {Event} event 
     */
    makeContent(event) {}


    /**
     * Удалить весь dom из контейнера (Очистить страницу перед
     * генерации другой, после нажатия на одну из иконок меню)
     */

    deleteContent() {
        for (let domElem of Array.from(this.container.children)) {
            this.container.removeChild(domElem);
        }
    }

}

// -------------------- Decorator ----------------------------------

/**
 * Декоратор для методов makeContent(evn) экземпляров
 * ContentPage. Значит: сначала очистить контейнер с содержимым,
 * затем вызов метода генерации контента makeContent(evn)
 * соответствующего экземпляра.
 * @param {Function} makeMethod 
 * @returns {Function}
 */

export function delDecorator(makeMethod) {
    return function(evn) {
        this.deleteContent();
        makeMethod.call(this, evn);  // вызов c контекстом this!
    };
} 

// -----------------------------------------------------------------