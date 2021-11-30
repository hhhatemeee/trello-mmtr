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


const boardListReducer = (state = initialState, action) => {
    // JSON.parse(localStorage['state']).Lists
    switch (action.type) {
        case CONSTANTS.ADD_BOARD: //Добавление доски
            const newLists = {
                title: action.payload,
                id: Date.now(),
                lists: [],
            }

            return [...state, newLists] //Все просто, к предыдущему состоянию добавляем новую доску

        case CONSTANTS.ADD_LIST: //Добавление списка
            const newList = {
                title: action.payload.title,
                listID: Date.now(),
                lists: [],
            }

            const newState = state.map(board => {
                //Индифицируем таблицу
                if (board.id === action.payload.boardID) {
                    // console.log(...list)
                    return {
                        ...board,
                        lists: [...board.lists, newList]
                    }
                } else {
                    return board
                }
            })

            return newState;

        case CONSTANTS.ADD_CARD: //Добавление карточки(элемента списка)
            const newCard = {
                text: action.payload.text,
                id: Date.now(),
                isCompleted: false
            }
            const newStateList = state.map(board => {
                //Сначала сверяем таблицу по id
                if (board.id === action.payload.boardID) {
                    return {
                        ...board,
                        lists: [...board.lists.map(list => {
                            //Затем сверяем список по id и добавляем в него новые карточки(элементы)
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

        case CONSTANTS.COMPLETE_CARD: //Помечам выполнен элемент списка или нет
            const newStateCard = state.map(board => {
                //Сверяем id доски
                if (board.id === action.payload.boardID) {
                    return {
                        ...board,
                        lists: [...board.lists.map(list => {
                            //Сверяем id списка
                            if (list.listID === action.payload.listID) {
                                return {
                                    ...list,
                                    lists: [...list.lists.map(card => {
                                        //Возвращаем содержимое карточки изменяя её isCompleted
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


        case CONSTANTS.DRAG_HAPPENED: //dnd перенос элементов списка
            //берем параметры из payload (прописано в библиотеке)
            const { boardID,
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId } = action.payload
            const newState1 = [...state];
            // Перенос элементов в текущем списке
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(board => Number(boardID) === board.id).lists.find(list => list.listID === Number(droppableIdStart))
                const card = list.lists.splice(droppableIndexStart, 1)
                list.lists.splice(droppableIndexEnd, 0, ...card)
            }

            //Перенос элементов среди списков
            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(board => Number(boardID) === board.id).lists.find(list => list.listID === Number(droppableIdStart))
                const card = listStart.lists.splice(droppableIndexStart, 1)
                const listEnd = state.find(board => Number(boardID) === board.id).lists.find(list => list.listID === Number(droppableIdEnd))
                listEnd.lists.splice(droppableIndexEnd, 0, ...card)
            }
            return newState1
        default:
            return state
    }
}

export default boardListReducer