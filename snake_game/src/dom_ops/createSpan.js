
export function createSpan(id="") {
    let span = document.createElement('span');
    span.setAttribute('id', id);

    return span;
}