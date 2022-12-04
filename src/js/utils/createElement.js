// функция создания элементов
export default function createElement(tag, options = {}) {
    let element = document.createElement(tag);
    options.className && (element.className = options.className);
    options.textContent && (element.textContent = options.textContent);
    options.type && (element.type = options.type);
    options.src && (element.src = options.src);
    return element;
}
