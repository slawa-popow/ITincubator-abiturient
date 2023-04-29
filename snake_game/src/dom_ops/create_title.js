
export { createTitleH1 }


function createTitleH1(strTitle) {
    let titleDivContain = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = strTitle;
    titleDivContain.appendChild(h1);
    titleDivContain.classList.add('main-title-page');

    return titleDivContain;
}