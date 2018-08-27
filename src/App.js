import React, { Component } from 'react'
import Onboarding from './components/Onboarding'
import Game from './components/Game'
import Results from './components/Results'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    const { playground } = this.props

    const selectContent = (playground) =>{
      if (playground === 'ONBOARDING') {
        return <Onboarding
                  // toggleBg={this.toggleBg}
                  // letsPlay={this.letsPlay}
                />
      } else if (playground === 'GAME') {
        return <Game
          // gameOver={this.gameOver}
                />
      }
      return <Results
                // questions={questions}
                // answers={answers}
                // playAgain={this.playAgain}
              />
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
