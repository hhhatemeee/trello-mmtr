import { CONSTANTS } from "../actions"

export const addBoard = (title) => {
    return {
        type: CONSTANTS.ADD_BOARD,
        payload: title
    }
}

export const sort = (
    boardID,
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            boardID,
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}