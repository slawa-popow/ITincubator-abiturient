/**
 * npm start
 * (запуск nodemon)
 */

import express from "express";


const app = express();

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.type('text/plain');
    response.send('Мои путешествия в мечтах');
});

app.get('/about', (request, response) => {
    response.type('text/plain');
    response.send('О себе'); 
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

