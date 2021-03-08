import React from 'react';
import './app.scss';
import {connect} from 'react-redux'
import { Layout } from './components/layout/Layout';
import {MainContext} from './context/MainContext'







class App extends React.Component{




  render(){





    return(
      <MainContext.Provider value = {{state: this.props}}>
        <Layout />
      </MainContext.Provider>
      
      
    )
  }
}


function mapStateToProps(state){
  return{

  }
}

function mapDispatchToProps(dispatch){
  return{

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
