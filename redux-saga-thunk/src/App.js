import React from 'react';
import {connect} from 'react-redux';
import './app.scss';

class App extends React.Component {


  render() {
    return <h1>Class component App</h1>
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);