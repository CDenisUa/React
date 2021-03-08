import React from 'react';
import {connect} from 'react-redux';
import './app.scss';
import Layout from './components/layout/Layout'
import { MainContext } from './context/MainContext';

class App extends React.Component {


  render() {
    return (
      <MainContext.Provider value={{state: this.props}}>
        <Layout />
      </MainContext.Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);