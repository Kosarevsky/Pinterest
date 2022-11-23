/* let modal = document.getElementById("modalComplain");
const buttonComplain = document.querySelector('.modal-content__button');
const cardsButton = document.querySelector('.modal-content');
let span = document.getElementsByClassName("close")[0]; */
/* cardsButtonComplain?.addEventListener("click", () => {	
	cardsButton?.classList.remove('hidden');
}); */

let modal = document.getElementById("modalComplain");
let btn = document.getElementById("btnComplain");
let span = document.getElementsByClassName("modal-content__cancel")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* cardsButton.append();
export default { element: cardsButtonComplain}; */