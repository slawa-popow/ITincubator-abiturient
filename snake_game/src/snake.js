import { Navigator } from "./navigator";
import { Field } from "./mvc/model/Field";
import { Apple } from "./mvc/model/Apple";

/**
 * Точка входа.
 */

// Создание и инициализация навигации (иконки svg Начать игру, Главная страница)
const navigation = new Navigator("content");
navigation.init();

let f = new Field(40, 40);
console.log(f);
let a = new Apple(40, 50, 10, 20);
// debugger;
f.init(a);
console.log(f);

