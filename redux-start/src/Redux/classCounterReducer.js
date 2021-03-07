const initialState = {
    counter: 0
}

export const classCounterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {
                counter: state.counter + 1,
                
            }
        case 'SUB':
            return {
                counter: state.counter - 1,
            }
        case 'ADD_NUM':
            return {
                counter: state.counter + action.payload,
            }
        default:
            return state
    }
}

