import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Redux/rootReducer';
import reduxThunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;



const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))

const app = <BrowserRouter>
                <Provider store = {store}>
                  <React.StrictMode>
                    <App />
                  </React.StrictMode>
                </Provider>
          </BrowserRouter>
            

ReactDOM.render(
  app,
  document.getElementById('root')
);
