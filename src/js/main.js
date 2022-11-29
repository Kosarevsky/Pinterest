import board from "./components/board.js";
import complain from "./components/complain";
import additionally from "./components/additionally";
import cards from "./components/cards";

document.querySelector(".boards-wrapper")?.append(board.element);
cards.getCards();
document.querySelector(".cards-list")?.append(cards.element);
