import { CONSTANTS } from "../actions"
let boardID = 0;
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


const boardListReducer = (state = JSON.parse(localStorage['state']).Lists, action) => {
    console.log(JSON.parse(localStorage['state']).Lists);
    switch (action.type) {
        case CONSTANTS.ADD_BOARD:
            const newList = {
                title: action.payload,
                id: Date.now()

            }
            boardID += 1;
            console.log(boardID);

            return [...state, newList]

        default:
            return state
    }
}

export default boardListReducer