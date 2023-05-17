"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (responce) {
    var todo = responce.data;
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("ID: ".concat(ID, "\nTitle: ").concat(title, "\nFinished: ").concat(finished));
}, function (err) {
    console.log('ERRor', err.code);
});
