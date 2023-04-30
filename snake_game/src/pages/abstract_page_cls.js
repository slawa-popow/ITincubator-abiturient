
/**
 * @abstract
 * Абстрактный класс динамически генерируемых страниц.
 * 
 */
export class ABCContentPage {
    constructor() {
        if (new.target === ABCContentPage) {
            throw new TypeError("Cannot construct AbstractClass instances directly");
        }
    }

    /**
     * Интерфейсный метод генерации структуры dom
     * @param {Event} event 
     */
    makeContent(event) {
        throw new Error("You must implement the abstractMethod");
    }

    /**
     * Интерфейсный метод удаления всех dom элементов из блока-контейнера
     */
    deleteContent() {
        throw new Error("You must implement the abstractMethod");
    }
}
