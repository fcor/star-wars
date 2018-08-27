import React from 'react'
import dv from '../../assets/img/dv.png'
import './dv.css'


const DarthVader = () =>
  <div className="dv row">
    <h1>
      I'M NOT YOUR FATHER!
    </h1>
    <img
      src={dv}
      alt="spaceship"
      className="dv-spaceship"
    />
  </div>

export default DarthVader
