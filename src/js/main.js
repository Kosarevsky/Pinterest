import board from "./components/board.js";
import cards from "./components/cards";
import { unload, domContentLoaded } from "./localStorage/localStorage.js"

cards.getCards();

document.querySelector(".cards-list")?.append(cards.element);
