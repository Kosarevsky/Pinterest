import createElement from "../utils/createElement";

const cardsButtonAdditionally = document.querySelector('.cards-button__additionally');
const cardsButton = document.querySelector('.cards-button');

const additionallyForm = createElement('div', { className: 'additionally-form' });
/* const additionallyFormAdd = createElement('button', { textContent: 'Добавить на доску' });
const additionallyFormComplain  = createElement('button', { textContent: 'Пожаловаться' }); */


cardsButtonAdditionally?.addEventListener('click', () => {
	cardsButtonAdditionally?.classList.toggle('active');
	cardsButton?.classList.toggle('active');
});

cardsButton.append(additionallyForm);
export default { element: additionallyForm};