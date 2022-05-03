import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-actions";

export const rootReducer = combineReducers({
    theme: themeReducer,
});
