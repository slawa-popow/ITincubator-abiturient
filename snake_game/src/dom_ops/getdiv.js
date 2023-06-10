export function getdiv(classes=null, id="") {
    let locClasses = (Array.isArray(classes) && (classes.length > 0)) ? classes : [];
    let div = document.createElement('div');
    div.setAttribute('id', id);
    div.classList.add(...locClasses);

    return div;
} 