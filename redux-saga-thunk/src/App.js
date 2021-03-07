import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div className="container">
        <h1>Redux app</h1>
        <span className="counter">{this.props.counter}</span>
        <div className="control"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {counter:state.counter}
}

const mapDispathToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps,mapDispathToProps)(App);
