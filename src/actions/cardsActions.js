import { CONSTANTS } from "../actions"

export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: { listID, text }
    }
}