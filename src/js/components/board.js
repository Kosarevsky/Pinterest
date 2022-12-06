import createElement from "../utils/createElement";

const selectBoardButton = document.querySelector(".boards-select-button");
const boardsWrapper = document.querySelector(".boards-wrapper");

selectBoardButton?.addEventListener("click", () => {
    selectBoardButton?.classList.toggle("active");
    boardsWrapper?.classList.toggle("active");
});

export default { element: boardsWrapper };

const boardsList = document.querySelector(`.boards-wrapper-list`);
const boardAddButton = document.querySelector(".boards-wrapper-button_add");
const boardDeleteAllButton = document.querySelector(
    ".boards-wrapper-button_delete-all",
);

boardAddButton.addEventListener("click", (event) => {
    event.stopPropagation();
    addBoardItem(new BoardData());
});

boardDeleteAllButton.addEventListener("click", (event) => {
    event.stopPropagation();
    boardsStorage.length = 0;
    boardsList.textContent = "";
});

const boardsStorage = [];

const findFreeId = function () {
    let startId = 1;

    while (true) {
        let findId = boardsStorage.find((item) => item?.id == startId);

        if (findId === undefined) {
            break;
        } else {
            startId++;
            continue;
        }
    }

    return startId;
};

const BoardData = function (id = findFreeId(), title = "Доска " + id) {
    this.id = id;
    this.title = title;
};

function addBoardItem({ id, title }) {
    const boardsWrapperListItem = createElement(`div`, {
        className: `boards-wrapper-list-item`,
    });
    const boardsWrapperlistItemTitle = createElement(`h4`, {
        className: `boards-wrapper-list-item_title`,
        textContent: `${title}`,
    });
    const boardsWrapperListItemRename = createElement(`p`, {
        className: `boards-wrapper-list-item_rename`,
        textContent: "📝",
    });
    const boardsWrapperListItemDelete = createElement(`p`, {
        className: `boards-wrapper-list-item_delete`,
        textContent: "❌",
    });

    boardsWrapperListItem.addEventListener("click", (event) => {
        if (event.target === boardsWrapperListItemRename) {
            const boardsWrapperListItemInput = createElement("input", {
                className: "boards-wrapper-list-item_input",
            });
            boardsWrapperListItemInput.setAttribute("maxLength", 10);
            boardsWrapperListItemInput.placeholder = "Макс. 10 символов";

            boardsWrapperListItemInput.addEventListener("mouseover", () => {
                boardsWrapperListItemInput.focus();
            });

            boardsWrapperListItemInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    boardsWrapperListItemInput.blur();
                }
            });

            boardsWrapperListItemInput.addEventListener("blur", (event) => {
                if (boardsWrapperListItemInput.value === "") {
                    boardsWrapperListItemInput.remove();
                    return;
                }

                const findMatch = boardsStorage.find(
                    (item) => item.title === boardsWrapperListItemInput.value,
                );

                if (findMatch === undefined) {
                    const title = boardsStorage.findIndex(
                        (item) =>
                            item.title ===
                            boardsWrapperlistItemTitle.textContent,
                    );
                    boardsStorage[title].title =
                        boardsWrapperListItemInput.value;
                    boardsWrapperlistItemTitle.textContent =
                        boardsWrapperListItemInput.value;
                    boardsWrapperListItemInput.remove();
                } else {
                    alert(
                        "Названия досок не могут быть одинаковыми. Попробуйте ещё раз.",
                    );
                    boardsWrapperListItemInput.value = "";
                    boardsWrapperListItemInput.focus();
                }
            });
            boardsWrapperListItem.append(boardsWrapperListItemInput);
        }

        if (event.target === boardsWrapperListItemDelete) {
            const title = boardsWrapperlistItemTitle.textContent;
            const index = boardsStorage.findIndex(
                (item) => item?.title === title,
            );
            boardsStorage.splice(index, 1);
            boardsWrapperListItem.remove();
        }
    });

    const boardsStorageItem = {
        id,
        title,
    };

    boardsStorage.push(boardsStorageItem);

    boardsWrapperListItem.append(
        boardsWrapperlistItemTitle,
        boardsWrapperListItemRename,
        boardsWrapperListItemDelete,
    );
    boardsList.append(boardsWrapperListItem);
}

const body = document.body;
const boards = document.querySelector(".boards");

body.addEventListener("click", (event) => {
    const checkBoardsClick = event.path.find((item) => item === boards);
    if (checkBoardsClick === undefined) {
        selectBoardButton?.classList.remove("active");
        boardsWrapper?.classList.remove("active");
    }
});

export { addBoardItem, BoardData, boardsStorage };
