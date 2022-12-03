import createElement from "../utils/createElement";



const selectBoardButton = document.querySelector(".boards-select-button");
const boardsWrapper = document.querySelector(".boards-wrapper");

selectBoardButton?.addEventListener("click", () => {
    selectBoardButton?.classList.toggle("active");
    boardsWrapper?.classList.toggle("active");
});

export default { element: boardsWrapper };

// update
const boardsList = document.querySelector(`.boards-wrapper-list`);
const boardAddButton = document.querySelector('.boards-wrapper-button_add');
const boardDeleteAllButton = document.querySelector('.boards-wrapper-button_delete-all');

boardAddButton.addEventListener('click', (event) => {
    event.stopPropagation()
    addBoardItem(new BoardData())
})

boardDeleteAllButton.addEventListener('click', (event) => {
    event.stopPropagation();
    boardsStorage.length = 0;
    boardsList.textContent = '';
})

const boardsStorage = [];

const findFreeId = function() {
    let startId = 1;

    while (true) {
        let findId = boardsStorage.find(item => item?.id == startId)
        
        if (findId === undefined) {
            break
        } else {
            startId++
            continue
        }
    }

    return startId
}

const BoardData = function (id = findFreeId(), title = 'Доска ' + id) {
    this.id = id;
    this.title = title;

    console.log(boardsStorage)
}

function addBoardItem({ id, title }) {
    const boardsWrapperListItem = createElement(`div`, { className: `boards-wrapper-list-item` });
    const boardsWrapperlistItemTitle = createElement(`h4`, { className: `boards-wrapper-list-item_title`, textContent: `${title}` });
    // const boardsWrapperListItem
    const boardsWrapperListItemRename = createElement(`p`, { className: `boards-wrapper-list-item_rename`, textContent: '📝' });
    const boardsWrapperListItemDelete = createElement(`p`, { className: `boards-wrapper-list-item_delete`, textContent: '❌' });

    boardsWrapperListItem.addEventListener('click', (event) => {

        if (event.target === boardsWrapperListItemRename) {
            const boardsWrapperListItemInput = createElement('input', { className: 'boards-wrapper-list-item_input'});
            boardsWrapperListItemInput.setAttribute('maxLength', 10);
            boardsWrapperListItemInput.placeholder = 'Макс. 10 символов'

            boardsWrapperListItemInput.addEventListener('keypress', (event) => {
                event.stopPropagation()

                if (event.key === 'Enter' && boardsWrapperListItemInput.value === '') {
                    boardsWrapperListItemInput.remove();
                    return
                }

                if (event.key === 'Enter') {
                    const check = boardsStorage.find(item => item.title === boardsWrapperListItemInput.value)

                    if (check === undefined) {
                        const title = boardsStorage.findIndex(item => item.title === boardsWrapperlistItemTitle.textContent);
                        boardsStorage[title].title = boardsWrapperListItemInput.value;
                        boardsWrapperlistItemTitle.textContent = boardsWrapperListItemInput.value;
                        boardsWrapperListItemInput.remove()
                    } else {
                        alert('Названия досок не могут быть одинаковыми. Попробуйте ещё раз.')
                    }
                }
            })
            boardsWrapperListItem.append(boardsWrapperListItemInput);
        }

        if (event.target === boardsWrapperListItemDelete) {
            const title = boardsWrapperlistItemTitle.textContent
            const index = boardsStorage.findIndex(item => item?.title === title )
            boardsStorage.splice(index, 1)
            boardsWrapperListItem.remove();
        }
    })

    const boardsStorageItem = {
        id,
        title
    }

    boardsStorage.push(boardsStorageItem)

    boardsWrapperListItem.append(boardsWrapperlistItemTitle, boardsWrapperListItemRename, boardsWrapperListItemDelete);
    boardsList.append(boardsWrapperListItem);
}

export { addBoardItem, BoardData, boardsStorage }