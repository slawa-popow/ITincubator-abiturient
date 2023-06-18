
import { getFortunes } from "./fortune.js";



export function home(request, response) {
    response.render('home');
}

export function about(request, response) {
    const fortunes = getFortunes()
    const randFortunes = fortunes[Math.floor(Math.random() * fortunes.length)];
    response.render('about', {fortune: randFortunes});
}

export function notFound(request, response) {
    response.render('404')
}

export function serverError(error, request, response, next) {
    response.render('505')
}

