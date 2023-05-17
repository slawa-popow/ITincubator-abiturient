import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(responce => {
    console.log(responce.data);
}, err => {
    console.log('ERRor', err.code);
});