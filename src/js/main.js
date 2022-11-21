import {inc} from "./utils/test.js"

console.log(inc(2))

// существующие элементы
const selectBoardButton = document.querySelector('.boards-select-button');
const boards = document.querySelector('.boards');

// функция создания элементов
function createElement(tag, options = {}) {
	let element = document.createElement(tag);
	options.className && (element.className = options.className);
	options.textContent && (element.textContent = options.textContent);
	return element;
}

// создание элементов
const boardsWrapper = createElement('div', { className: 'boards-wrapper' });
// временно
const boardsWrapperContent = createElement('p', { textContent: 'Здесь что-то должно быть... Или не должно' });

// создание событий
selectBoardButton.addEventListener('click', () => {
	selectBoardButton.classList.toggle('active');
	boardsWrapper.classList.toggle('active');
});

// добавление элементов
boardsWrapper.append(boardsWrapperContent)
boards.append(boardsWrapper)