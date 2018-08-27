import React from 'react'
import spaceship from '../../assets/img/spaceship.png'
import './results.css'


const Results = () =>
  <div className="results column">
    <img
      src={spaceship}
      alt="spaceship"
      className="results-spaceship"
    />
    <h1>
      Now you know some facts about 5 star war's characters.
      <br/>
      Do you want to know about another ones?
    </h1>
  </div>

export default Results
