import {SHOW_NAV, HIDE_NAV} from '../actionTypes';

const initialValue = {
    isOpen: false,
}

export const nav = (state = initialValue, action) => {
    switch (action.type){
        case SHOW_NAV:
            return{
                isOpen: true,
            }
        case HIDE_NAV:
            return{
                isOpen: false,
            }
        default:
           return state;
    }
}