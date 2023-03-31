"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then((resp) => {
    console.log(resp.data);
});
