import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from "../config";

const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;
const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api,
        })
    )
))
