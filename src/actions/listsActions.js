import { CONSTANTS } from "../actions"

export const addBoard = (title) => {

    return {
        type: CONSTANTS.ADD_BOARD,
        payload: title
    }
}