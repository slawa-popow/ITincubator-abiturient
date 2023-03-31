
import axios from 'axios';

// tsc -t es6 -m commonjs index.ts 

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((resp) => {
    console.log(resp.data);
});