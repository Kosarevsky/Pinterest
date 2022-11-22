// функция создания элементов
export default function createElement(tag, options = {}) {
	let element = document.createElement(tag);
	options.className && (element.className = options.className);
	options.textContent && (element.textContent = options.textContent);
	return element;
}