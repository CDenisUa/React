import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';

export const Counter = () => {
    //useStore - позволяет получить Stor
    //useDispatch - позволяет получить доступ к функции Dispatch
    //useSelector - позволяет получить в компонент State

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter );

    return(
        <div className="container">
          <h1>Redux with hooks</h1>
          <span className="counter">{counter}</span>
          <div className="control">
            <button onClick={() => dispatch({type: 'ADD'})}>+</button>
            <button onClick={() => dispatch({type: 'SUB'})}>-</button>
            <button onClick={() => dispatch({type: 'ADD_NUM', payload: 10})}>+10</button>
          </div>
        </div>
    )
}