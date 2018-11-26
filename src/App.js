import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
//import CardList from './components/OLDCardList'
//import SearchTool from './components/OLDSearchTool'
import { withTheme } from '@material-ui/core/styles'
//import Selecta from './components/Selecta'

class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <Main />
        </div>
    )
  }
}

export default withTheme()(App);