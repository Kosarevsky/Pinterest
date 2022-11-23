import board from "./components/board.js";
import complain from "./components/complain";
import additionally from "./components/additionally";

document.querySelector(".boards-wrapper")?.append(board.element);
document.querySelector(".cards-button")?.append(complain.element);
document.querySelector(".cards-button")?.append(additionally.element);