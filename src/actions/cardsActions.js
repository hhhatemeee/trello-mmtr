import { CONSTANTS } from "../actions"

export const addCard = (boardID, listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { boardID, listID, text }
    }
}