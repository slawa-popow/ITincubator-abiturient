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

const mod = (function() {
    
    const fortunes = [
        "Победи  свои  страхи,  или  они  победят  тебя.",
        "Рекам  нужны  истоки.",
        "Не  бойся  неведомого.",
        "Тебя  ждет  приятный  сюрприз.",
        "Будь  проще  везде,  где  только  можно.",
    ];
    const publicApi = {fortunes};
    return publicApi;
})();

const app = express();

const port = process.env.PORT || 3000;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url)); // __dirname для es6 module
app.use(express.static(__dirname + '/public')); // подключить стили и прочую статику

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (request, response) => {
    response.render('home');
});

app.get('/about', (request, response) => {
    const randFortunes = mod.fortunes[Math.floor(Math.random() * mod.fortunes.length)];
    response.render('about', {fortune: randFortunes});
});

app.use((request, response) => {
    response.type('text/plain');
    response.status(404);
    response.send('404 - Ничегошеньки не найдено.');
});

app.use((error, request, response, next) => {
    console.log(error.stack);
    response.type('text/plain');
    response.status(500);
    response.send('500 - Ой а что случилось. 500-err');
});

app.listen(port, () => {
    console.log(`Сервер запущен http://localhost:${port} \n Нажмите Ctrl+C для остановки.`);
});






























