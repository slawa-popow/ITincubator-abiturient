

export class Controller {

    constructor(model, view) {
        this.pole = model;
        this.view = view;
        this.pole.addObserver(this.view);
        this.view.pole = this.pole;
    }

    init(container) {
        this.container = container;
        this.view.initDisplay(this.container);
        this.pole.init(...this.view.getSizeDisplay());
    }

    setDirectionSnake(strDirection) {
        this.pole.changeDirectionSnake(strDirection);
    }


    destroy() {
        this.view.destroy();
    }
}