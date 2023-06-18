/**
 * Учебрые исходники:
 * https://github.com/EthanRBrown/web-development-with-node-and-express-2e
 * 
 * npm start
 * (запуск nodemon)
 */

import * as url from 'url';

import express from "express";

import { engine } from 'express-handlebars';
import {home, about, notFound, serverError} from './lib/hands.js'; 


const app = express();

const port = process.env.PORT || 3000;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url)); // __dirname для es6 module
app.use(express.static(__dirname + '/public')); // подключить стили и прочую статику

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', home);

app.get('/about', about);

app.use(notFound);

app.use(serverError);

app.listen(port, () => {
    console.log(`Сервер запущен http://localhost:${port} \n Нажмите Ctrl+C для остановки.`);
});  






























