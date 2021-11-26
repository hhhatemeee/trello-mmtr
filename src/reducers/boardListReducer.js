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
        default:
            return state
    }
}

export default boardListReducer