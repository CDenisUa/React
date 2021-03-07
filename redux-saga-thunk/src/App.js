import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { Counter } from './Counter';

class App extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div className= 'wrapper'>
        <div className="container">
          <h1>Redux with classes</h1>
          <span className="counter">{this.props.counter}</span>
          <div className="control">
            <button onClick={this.props.addHandler}>+</button>
            <button onClick={this.props.subHandler}>-</button>
            <button onClick={this.props.addNumHendler}>+10</button>
          </div>
        </div>
        <Counter />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter:state.classCounterReducer.counter,
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    addHandler: () => dispatch({type: 'ADD'}),
    subHandler: () => dispatch({type: 'SUB'}),
    addNumHendler: () => dispatch({type: 'ADD_NUM',payload: 10})
  }
}

export default connect(mapStateToProps,mapDispathToProps)(App);
