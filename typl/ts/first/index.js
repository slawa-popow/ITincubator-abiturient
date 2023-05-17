"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (responce) {
    console.log(responce.data);
}, function (err) {
    console.log('ERRor', err.code);
});
