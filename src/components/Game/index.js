import React from 'react'
import { connect } from 'react-redux'
import { fetchDetails } from '../../actions'
import BouncingLoader from '../BouncingLoader'
import avatar from '../../assets/img/1.jpg'
import logo from '../../assets/img/swlogo.png'
import Button from '../Button'
import './game.css'

class Game extends React.Component {

  componentDidMount(){
    // console.log('hi');
    const { step } = this.props
    this.props.dispatch(fetchDetails(step))
  }

  render() {
    const { isFetching, details } = this.props
    return (
      <div className="column">
        { !isFetching &&
            <img
              src={logo}
              alt="logo"
              className="game-card-logo"
            />
        }
        <CardWithLoading
            isFetching={isFetching}
            details={details}
            // handleAnswer={this.handleAnswer}
        />
      </div>
    )
  }
}

const Card = ({details}) =>{
  // console.log(details);
  return(
    <div className="game-card column" style={{color: 'white'}}>
      <img
        src={avatar}
        alt="logo"
        className="game-card-avatar"
      />
      <h1>
        {details.name}
      </h1>
      <p>
        {`Height: ${details.height}`}
      </p>
      <p>
        {`Mass: ${details.mass}`}
      </p>
      <p>
        {`Birth year: ${details.birth_year}`}
      </p>
      <p>
        {`Gender: ${details.gender}`}
      </p>
      <Button
        onClick={() => console.log('click')}
        variant="next"
        >
        Next
      </Button>
      {/* <div className="game-card-top">
      <div className="game-card-mid">
      <p className="game-card-question">
      {`${question}`}
    </p>
  </div>
  <div className="game-card-bottom column">
  <Button
  variant="true"
  onClick={() => handleAnswer('True')}
  >
  TRUE
</Button>
<Button
variant="false"
onClick={() => handleAnswer('False')}
>
FALSE
</Button>
</div> */}

    </div>
  )
}

const withLoading = (Component) => ({ isFetching,  ...rest  }) =>
  isFetching
  ? <BouncingLoader />
  : <Component { ...rest } />


const CardWithLoading = withLoading(Card);

function mapStateToProps(state) {
  const { isFetching, details, step } = state.game
  return{
    isFetching,
    details,
    step
  }
}

export default connect(mapStateToProps)(Game)
