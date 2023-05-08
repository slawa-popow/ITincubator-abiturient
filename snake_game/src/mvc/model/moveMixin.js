/**
 * Миксин. Методы вызываются для изменения координат
 * головы змейки
 */


export const moveMixin = {
    up() {
        this.positionY--;
    },

    down() {
        this.positionY++;
    },

    left() {
        this.positionX--;
    },

    right() {
        this.positionX++;
    },
    stop() {
        // Пустой. Ничего не делать.
    }
};