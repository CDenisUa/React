import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';

export const Counter = () => {
    //useStore - позволяет получить Stor
    //useDispatch - позволяет получить доступ к функции Dispatch
    //useSelector - позволяет получить в компонент State

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.hookCounterReducer.counter );

    return(
        <div className="container">
          <h1>Redux with hooks</h1>
          <span className="counter">{counter}</span>
          <div className="control">
            <button onClick={() => dispatch({type: 'ADD_HOOK'})}>+</button>
            <button onClick={() => dispatch({type: 'SUB_HOOK'})}>-</button>
            <button onClick={() => dispatch({type: 'ADD_NUM_HOOK', payload: 10})}>+10</button>
          </div>
        </div>
    )
}