import React from 'react'
import { connect } from 'react-redux'
import { fetchDetails, seeResults } from '../../actions'
import BouncingLoader from '../BouncingLoader'
import avatar1 from '../../assets/img/1.jpg'
import avatar2 from '../../assets/img/2.jpg'
import avatar3 from '../../assets/img/3.png'
import avatar4 from '../../assets/img/4.jpg'
import avatar5 from '../../assets/img/5.jpg'
import logo from '../../assets/img/swlogo.png'
import Button from '../Button'
import './game.css'

const selectAvatar = (step) => {
  if (step === 1) {
    return avatar1
  } else if (step === 2) {
    return avatar2
  } else if (step === 3) {
    return avatar3
  } else if (step === 4) {
    return avatar4
  }
  return avatar5
}

class Game extends React.Component {
  constructor(props){
    super(props)

    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount(){
    // console.log('hi');
    const { step } = this.props
    this.props.dispatch(fetchDetails(step))
  }

  handleNext(){
    const { step } = this.props
    if (step < 5) {
      this.props.dispatch(fetchDetails(step))
    } else {
      this.props.dispatch(seeResults())
    }
  }

  render() {
    const { isFetching, details, step } = this.props
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
            handleNext={this.handleNext}
            step={step}
            // handleAnswer={this.handleAnswer}
        />
      </div>
    )
  }
}

const Card = ({details, handleNext, step}) =>{
  // console.log(details);
  return(
    <div className="game-card column" style={{color: 'white'}}>
      <img
        src={selectAvatar(step)}
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
        onClick={handleNext}
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
