import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CardList from './components/CardList'
import SearchTool from './components/SearchTool'
import { withTheme } from '@material-ui/core/styles'

class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <SearchTool />
          <CardList />
        </div>
    )
  }
}

export default withTheme()(App);