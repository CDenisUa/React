const initialState = {
    counter: 0
}


export const hookCounterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_HOOK':
            return {
                counter: state.counter + 1,
                
            }
        case 'SUB_HOOK':
            return {
                counter: state.counter - 1,
            }
        case 'ADD_NUM_HOOK':
            return {
                counter: state.counter + action.payload,
            }
        default:
            return state
    }
}

export default hookCounterReducer;