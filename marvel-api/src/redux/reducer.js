
const defaultState = {
    data: '',
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_HEROES":
            return {...state, heroes: state.heroes }
        case "ADD_HEROES":
            return {...state, data: state.data }
        default:
            return state
    }
}