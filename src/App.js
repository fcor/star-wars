import React, { Component } from 'react'
import Onboarding from './components/Onboarding'
import Game from './components/Game'
import Results from './components/Results'
import DarthVader from './components/DarthVader'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    const { playground } = this.props

    const selectContent = (playground) =>{
      if (playground === 'ONBOARDING') {
        return <Onboarding />
      } else if (playground === 'GAME') {
        return <Game />
      }
      else if (playground === 'RESULTS') {
        return <Results />
      }
      return <DarthVader />
    }

    return (
      <div className="app">
        {selectContent(playground)}
      </div>
)
  }
}

function mapStateToProps(state) {
  const playground = state.playground.step
  return {
    playground
  }
}

export default connect(mapStateToProps)(App)
