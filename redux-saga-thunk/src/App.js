import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div style={{textAlign: 'center'}}>
        <h1>{this.props.counter}</h1>
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
