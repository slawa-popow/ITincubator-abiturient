
export { createTitleH1 }

/**
 * Функции модификации, создания dom
 * 
 */



/**
 * Создать div, добавить в него h1, вернуть объект div
 * @param {string} strTitle - название заголовка страницы
 * @returns {object}
 */
function createTitleH1(strTitle) {
    let titleDivContain = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = strTitle;
    titleDivContain.appendChild(h1);
    titleDivContain.classList.add('main-title-page'); // жестко привязанные стили
    
    return titleDivContain;
}