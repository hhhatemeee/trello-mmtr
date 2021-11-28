import { CONSTANTS } from "../actions"
const initialState = [{
    title: 'First Board',
    id: 0,
    lists: [{
        title: 'First List',
        listID: 0,
        lists: [{
            id: 0,
            text: 'my card list'
        }]
    }],
},
{
    title: 'Second Board',
    id: 1,
    lists: [{
        title: 'Second List',
        listID: 0,
        lists: [{
            id: 0,
            text: 'my card list2'
        }]
    }],
}
]

let boardId = 0

const boardListReducer = (state = JSON.parse(localStorage['state']).Lists, action) => {
    // JSON.parse(localStorage['state']).Lists
    switch (action.type) {
        case CONSTANTS.ADD_BOARD:
            const newLists = {
                title: action.payload,
                id: Date.now(),
                lists: [],
            }

            return [...state, newLists]
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload.title,
                id: Date.now(),
                lists: [],
            }

            const newState = state.map(list => {
                if (list.id === action.payload.boardID) {
                    return {
                        ...list,
                        lists: [...list.lists, newList]
                    }
                } else {
                    return list
                }
            })

            return newState;
        default:
            return state
    }
}

export default boardListReducer