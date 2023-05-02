export function getdiv(id=null, classes=null) {
    let div = document.createElement('div');
    div.setAttribute('id', (id) ? id : '');
    div.classList.add(...(classes) ? classes : []);

    return div;
}