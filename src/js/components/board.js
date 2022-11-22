import createElement from "../utils/createElement";
// существующие элементы
const selectBoardButton = document.querySelector(".boards-select-button");
const boardsWrapper = document.querySelector(".boards-wrapper");

// создание элементов
// временно
const boardsWrapperContent = createElement("p", {
    textContent: "Здесь что-то должно быть... Или не должно",
});

// создание событий
selectBoardButton?.addEventListener("click", () => {
    selectBoardButton?.classList.toggle("active");
    boardsWrapper?.classList.toggle("active");
});

// добавление элементов
boardsWrapper?.append(boardsWrapperContent);

export default { element: boardsWrapperContent };
