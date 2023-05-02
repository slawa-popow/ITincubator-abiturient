
export function createSpan(id="") {
    let span = document.createElement('div');
    span.setAttribute('id', id);

    return span;
}