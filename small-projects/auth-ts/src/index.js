import React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from 'store';
import {App} from "./App";
import './firebase';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store} >
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

