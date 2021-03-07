import {combineReducers} from 'redux';
import {classCounterReducer} from './classCounterReducer';
import {hookCounterReducer} from './hookCounterReducer';

export default combineReducers({
    classCounterReducer,
    hookCounterReducer,
});