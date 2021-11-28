import { CONSTANTS } from "../actions"
let boardID = 0;
const initialState = [{
    title: 'First Board',
    id: 0,
    lists: [],
},
{
    title: 'Second Board',
    id: 1,
    lists: [],
}
]

const boardListReducer = (state = JSON.parse(localStorage['state']).Lists, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_BOARD:
            const newList = {
                title: action.payload,
                id: Date.now()

            }
            boardID += 1;
            console.log(boardID);

            return [...state, newList]
        case CONSTANTS.ADD_LIST:

        default:
            return state
    }
}

export default boardListReducer