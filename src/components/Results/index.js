import React from 'react'
import spaceship from '../../assets/img/spaceship.png'
import Button from '../Button'
import { lastFact } from '../../actions/'
import { connect } from 'react-redux'
import './results.css'


const Results = (props) =>
  <div className="results column">
    <img
      src={spaceship}
      alt="spaceship"
      className="results-spaceship"
    />
    <h1>
      Now you know some facts about 5 star war's characters.
      <br/>
      Do you want to know another one?
    </h1>
    <Button
      onClick={() => props.dispatch(lastFact())}
      variant="next"
      >
       Yes!
    </Button>
  </div>

export default connect()(Results)
