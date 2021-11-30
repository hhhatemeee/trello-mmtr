import { CONSTANTS } from "../actions"
const initialState = [{
    title: 'First Board',
    id: 0,
    lists: [{
        title: 'First List',
        listID: 0,
        lists: [{
            id: 0,
            text: 'my card list',
            isCompleted: 'false'
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
            text: 'my card list2',
            isCompleted: false
        }]
    }],
}
]

let boardId = 0

const boardListReducer = (state = initialState, action) => {
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
                listID: Date.now(),
                lists: [],
            }

            const newState = state.map(list => {
                if (list.id === action.payload.boardID) {
                    // console.log(...list)
                    return {
                        ...list,
                        lists: [...list.lists, newList]
                    }
                } else {
                    return list
                }
            })

            return newState;

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: Date.now(),
                isCompleted: false
            }
            const newStateList = state.map(board => {
                if (board.id === action.payload.boardID) {
                    return {
                        ...board,
                        lists: [...board.lists.map(list => {
                            if (list.listID === action.payload.listID) {
                                return {
                                    ...list,
                                    lists: [...list.lists, newCard]
                                }
                            } else {
                                return list
                            }
                        })]
                    }
                } else {
                    return board
                }
            })
            // console.log(newStateList);
            return newStateList
        case CONSTANTS.COMPLETE_CARD:
            const newStateCard = state.map(board => {
                if (board.id === action.payload.boardID) {
                    return {
                        ...board,
                        lists: [...board.lists.map(list => {
                            if (list.listID === action.payload.listID) {
                                return {
                                    ...list,
                                    lists: [...list.lists.map(card => {

                                        return {
                                            ...card,
                                            isCompleted: card.id === action.payload.id ? !card.isCompleted : card.isCompleted
                                        }

                                    })]
                                }
                            } else {
                                return list
                            }
                        })]
                    }
                } else {
                    return board
                }
            })
            return newStateCard

        case CONSTANTS.DRAG_HAPPENED:

            const { boardID,
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId } = action.payload
            const newState1 = [...state];
            // in tne same list
            if (droppableIdStart === droppableIdEnd) {
                console.log(boardID);
                console.log(droppableIdStart);
                // console.log();
                const list = state.find(board => Number(boardID) === board.id).lists.find(list => list.listID === Number(droppableIdStart))
                const card = list.lists.splice(droppableIndexStart, 1)
                list.lists.splice(droppableIndexEnd, 0, ...card)
            }
            return newState1
        default:
            return state
    }
}

export default boardListReducer