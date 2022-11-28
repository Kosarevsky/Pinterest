import board from "./components/board.js";
import cards from "./components/cards";

cards.getCards();

document.querySelector(".boards-wrapper")?.append(board.element);

document.querySelector(".cards-list")?.append(cards.element);
