import createElement from "./utils/createElement";

// существующие элементы
const selectBoardButton = document.querySelector(".boards-select-button");
const boards = document.querySelector(".boards");

// создание элементов
const boardsWrapper = createElement("div", { className: "boards-wrapper" });
// временно
const boardsWrapperContent = createElement("p", {
    textContent: "Здесь что-то должно быть... Или не должно",
});

// создание событий
selectBoardButton.addEventListener("click", () => {
    selectBoardButton.classList.toggle("active");
    boardsWrapper.classList.toggle("active");
});

// добавление элементов
boardsWrapper.append(boardsWrapperContent);
boards.append(boardsWrapper);
