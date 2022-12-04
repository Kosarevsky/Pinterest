import board from "./components/board.js";
import additionally from "./components/additionally";
import cards from "./components/cards";
import complain from "./components/complain";

cards.getCards();
document.querySelector(".cards-list")?.append(cards.element);
document.querySelector(".modals")?.append(additionally.element);
document.querySelector(".modals")?.append(complain.element);
document.querySelector(".boards-wrapper")?.append(board.element);
