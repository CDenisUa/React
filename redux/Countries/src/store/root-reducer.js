// Redux-reducers
import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-actions";
import { countriesReducer } from "./countries/countries-reducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
});
