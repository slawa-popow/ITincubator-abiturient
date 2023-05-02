export function createUL(liArr, type='ul') {
    let uol = document.createElement(type);
    liArr.forEach(message => {
        let li = document.createElement('li');
        li.innerHTML = message;
        uol.appendChild(li);
    });

    return uol;
}