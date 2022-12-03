import { addBoardItem, BoardData, boardsStorage } from "../components/board.js";

export const unload = window.addEventListener('unload', () => {
		localStorage.setItem('listOfBoards', JSON.stringify(boardsStorage))
})

export const domContentLoaded = window.addEventListener('DOMContentLoaded', () => {
	const listOfBoards = JSON.parse(localStorage.getItem('listOfBoards'));
	listOfBoards?.forEach( item => {
		addBoardItem(new BoardData(item.id, item.title))
	})
})

