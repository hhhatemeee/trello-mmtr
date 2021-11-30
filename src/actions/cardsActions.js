import { CONSTANTS } from "../actions"

export const addCard = (boardID, listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { boardID, listID, text }
    }
}


export const completeCard = (boardID, listID, id) => {
    return {
        type: CONSTANTS.COMPLETE_CARD,
        payload: { boardID, listID, id }
    }
}