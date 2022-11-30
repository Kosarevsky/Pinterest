import additionally from "./components/additionally";
import board from "./components/board.js";
import cards from "./components/cards";
import complain from "./components/complain";

cards.getCards();
document.querySelector(".boards-wrapper")?.append(board.element);
document.querySelector(".cards-list")?.append(cards.element);
