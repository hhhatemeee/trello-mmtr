import { CONSTANTS } from "../actions"
let boardID = 2;
const initialState = [
    {
        title: 'First Board',
        id: 0,
    },
    {
        title: 'Second Board',
        id: 1,
    }
]


const boardListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_BOARD:
            const newList = {
                title: action.payload,
                id: boardID
            }



            boardID += 1;
            return [...state, newList]

        default:
            return state
    }
}

export default boardListReducer