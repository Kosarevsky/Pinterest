const cardsButtonAdditionally = document.querySelector('.cards-button-additionally');
const cardsButton = document.querySelector('.cards-button');

function createElement(tag, options = {}) {
	let element = document.createElement(tag);
	options.className && (element.className = options.className);
	options.textContent && (element.textContent = options.textContent);
	return element;
}

// создание элементов
const additionallyWrapper = createElement('div', { className: 'additionally-wrapper' });
const additionallyForm = createElement('div', { className: 'additionally-form' });
const additionallyFormAdd = createElement('button', { textContent: 'Добавить на доску' });
const additionallyFormComplain  = createElement('button', { textContent: 'Пожаловаться' });


cardsButtonAdditionally.addEventListener('click', () => {
	cardsButtonAdditionally.classList.toggle('active');
	additionallyWrapper.classList.toggle('active');
});

// добавление элементов
additionallyWrapper.append(additionallyForm, additionallyFormAdd, additionallyFormComplain)
cardsButton.append(additionallyWrapper)