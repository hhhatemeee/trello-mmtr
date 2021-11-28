import { CONSTANTS } from "../actions"

export const addList = (boardID, title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: { boardID, title }
    }
}