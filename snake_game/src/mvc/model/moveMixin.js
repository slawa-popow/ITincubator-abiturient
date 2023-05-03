

export const moveMixin = {
    up() {
        this.positionY--;
    },

    down() {
        this.positionY++;
    },

    left() {
        this.positionX++;
    },

    right() {
        this.positionX--;
    }
};