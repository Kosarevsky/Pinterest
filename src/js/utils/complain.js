function createElement(tag, options = {}) {
	let element = document.createElement(tag);
	options.className && (element.className = options.className);
	options.textContent && (element.textContent = options.textContent);
	return element;
}

// создание элементов
const complainWrapper = createElement('div', { className: 'complain-wrapper' });
const complainForm = createElement('div', { className: 'complain-form' });
const complainFormContent = createElement('h2', { textContent: 'Модальное окно меню пожаловаться' });
const complainFormCancel = createElement('button', { textContent: 'Cancel' });
const complainFormSend = createElement('button', { textContent: 'Send' });