import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
    id: number,
    title: string,
    completed: boolean
}
axios.get(url).then(responce => {
    const todo = responce.data as Todo;
    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    logTodo(ID, title, finished);
}, err => {
    console.log('ERRor', err.code);
});

const logTodo = (id: number, title: string, complited: boolean) => {
    console.log(`ID: ${id}\nTitle: ${title}\nFinished: ${complited}`);
};