
import { HomePage } from "./pages/home_page";
import { PlayPage } from "./pages/play_page";
export  { Navigator };


/**
 * Фабрика экземпляров динамических страниц.
 * Создание экземпляров ContentPage, присвоение каждому
 * ссылки на объект-контейнер контента, присвоение каждому обработчика
 * событий нажания мыши, вызов генерации первой страницы (Главная страница.)
 */
class Navigator {

    // сопоставить id иконок (кнопок) навигации с типом страницы {страница: id в html}
    static ids = {
        'home': 'ico_home',
        'play': 'ico_play'
    };

    // {Класс: {"имя экземпляра класса": ["название заголовка раздела", ["id иконки (кнопки) меню"]]}}
    static detailsInstances = {
        HomePage: {'homePage': ['Главная страница', Navigator.ids['home']]},
        PlayPage: {'playPage': ['Начать игру', Navigator.ids['play']]}
    }

    // Для вызова конструктора с new, имя класса не должно быть строкой: {string: class}
    static classes = {
        HomePage: HomePage,
        PlayPage: PlayPage
    };    


    /**
     * @constructor
     * @param {string} idContainer -id блока контейнера дин. генерируемого контента 
     */
    constructor(idContainer) {
        this.container = document.getElementById(idContainer);  // объект-контейнер дин. контента
    }


    /**
     * пройтись по Navigator.detailsInstances, вытащить оттуда информацию для создания
     * объектов страниц. Создав объекты страниц присвоить каждому ссылку на контейнер генери-
     * руемого контента, добавить обработчик нажатия мыши (По нажатию мыши на значке навигации
     * запускается декорируемый метод makeContent(event) экземпляра связанного с этим значком.)
     */
    init() {
        for (let [cls, details] of Object.entries(Navigator.detailsInstances)) {
            let [nameInstance, detailTitle] = Object.entries(details)[0];
            
            let instancePage = new Navigator.classes[cls](detailTitle[0]); // Просто строка имени класса не пройдет!
            instancePage.container = this.container;
            let clickPageIco = document.getElementById(detailTitle[1]);
            clickPageIco.onclick = instancePage.makeContent.bind(instancePage);  // Назначить обработчик нажатия мыши. Связать с this
            this[nameInstance] = instancePage;  // все созданные экземпляры ContentPage хранятся как атрибуты instance of Navigator.
        }
        
        this.homePage.makeContent(); // показать Главную страницу.
    }

}