'use strict';
const btns = document.querySelectorAll('button');
btns.forEach(function (button) {
    button.addEventListener('click', handleClick);
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    const card = {
        wrap: cardNode,
        img: cardNode.children[cardNode.children.length - 2],
        productName: cardNode.children[0],
        button: cardNode.children[cardNode.children.length - 1],
    };
    const text = card.button.innerText;
    if (text === 'Подробнее') {
        showMoreText(card);
    } else if (text === 'Отмена') {
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block';
    let car = card.wrap.querySelector('.desc');
    card.wrap.removeChild(car);
    card.img.classList.add('img');
    card.button.innerText = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    let textIn = 'Здесь вы можете увидеть описание данной картинки!';
    card.productName.insertAdjacentHTML("afterend", `<div class="desc">${textIn}</div>`);
    card.button.innerText = 'Отмена';
}