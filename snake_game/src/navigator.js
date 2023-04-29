
import { HomePage } from "./pages/home_page";
import { PlayPage } from "./pages/play_page";
export  { Navigator };

class Navigator {

    // {Класс: {"имя экземпляра класса": ["название заголовка раздела", ["id элем. списка строчного меню"]]}}
    static detailsInstances = {
        HomePage: {'homePage': ['Главная страница', 'ico_home']},
        PlayPage: {'playPage': ['Начать игру', 'ico_play']}
    }

    static classes = {
        HomePage: HomePage,
        PlayPage: PlayPage
    };    

    constructor(idContainer) {
        this.container = document.getElementById(idContainer);  
    }

    init() {
        
        for (let [cls, details] of Object.entries(Navigator.detailsInstances)) {
            let [nameInstance, detailTitle] = Object.entries(details)[0];
            // console.log(typeof cls, detailTitle[0]);
            let instancePage = new Navigator.classes[cls](detailTitle[0]); 
            instancePage.container = this.container;
            let clickPageIco = document.getElementById(detailTitle[1]);
            clickPageIco.addEventListener('click', instancePage.makeContent.bind(instancePage));
            this[nameInstance] = instancePage;
        }
        // console.log(this.homePage);
        this.homePage.makeContent();
    }
}