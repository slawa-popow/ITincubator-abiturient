
import { Navigator } from "./navigator";

import { Snake } from "./mvc/model/Snake";


// import { Field } from "./mvc/model/Field";
// import { Apple } from "./mvc/model/Apple";
// import { Head } from "./mvc/model/Head";
// import { Tail } from "./mvc/model/Tail";




/**
 * Точка входа.
 */

// Создание и инициализация навигации (иконки svg Начать игру, Главная страница)

const navigation = new Navigator("content");
navigation.init();


// -----------------------------------------------------------------------------

const snake = new Snake([3, 3], 2);
snake.initSnake();
console.log(snake);

// let f = new Field(40, 40);
// console.log(f);
// let a = new Apple(40, 50, 10, 20);
// // debugger;
// f.init(a);
// console.log(f);

// let sn = new Head(41, 51, 20, 30);
// let tl = new Tail(4, 5, 0, 0);
// console.log(sn, tl);
// sn.direction = 'up';
// sn.step();
// sn.step();
// sn.step();
// console.log(sn, tl);
// tl.direction = 'left';
// tl.step();
// tl.step();
// tl.step();
// tl.step();
// console.log(sn, tl);
