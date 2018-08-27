import React from 'react'
// import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group"
import Button from '../Button'
import * as actions from '../../actions/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from '../../assets/img/swlogo.png'
import './Onboarding.css'


const setNextStep = (step) => {
  if (step === 'ONE') {
    return 'TWO'
  }
  return 'THREE'
}

const selectButtonText = (step) => step === 'TWO' ? 'NEXT' : 'BEGIN'

const getCs = (currentStep, refStep) => {
  if (currentStep === refStep) {
    return 'circle selected'
  }
  return 'circle'
}

const Onboarding = ({ step, actions }) =>
  <div>
    {step === "ONE" ? (
      <StepOne actions={actions} />
    ) : (
      <StepTwoThree
        actions={actions}
        step={step}
      />
    )}
  </div>

const StepOne = ({actions}) =>
  <div className="onboarding-step-one column">
      <img
        src={logo}
        alt="logo"
        className="onboarding-logo"
      />
      <Button
        onClick={() => actions.setStep("TWO")}
        variant={"big"}
        >
        LET'S BEGIN!
      </Button>
  </div>


const StepTwoThree = ({ actions, step }) => {
  const buttontext = selectButtonText(step)
  const selectHandler = (step === 'TWO')
                          ? () => actions.setStep(setNextStep(step))
                          : () => actions.letsPlay() 
  return(
    <div className="onboarding-step-two column">
      <div className="onboarding-top column">
        <CSSTransition
          unmountOnExit
          in={step === "TWO"}
          timeout={250}
          classNames="two"
          >
          <Two />
        </CSSTransition>
        <CSSTransition
          unmountOnExit
          in={step === "THREE"}
          timeout={250}
          classNames="three"
          >
          <Three />
        </CSSTransition>
      </div>
      <div className="onboarding-bottom column">
        <Circles step={step} />
        <Button
          onClick={selectHandler}
          >
            {buttontext}
          </Button>
      </div>
    </div>
  )
}

const Two = () =>
  <div className="onboarding-top-rtg">
    <p className="onboarding-title" >
      Welcome to the Trivia challenge!
    </p>
    <p className="onboarding-text" >
      You will be presented with 10 True or False questions.
    </p>
  </div>

const Three = () =>
  <div className="onboarding-top-rtg">
    <p className="onboarding-text long" >
      We are going to test your knowledge on different categories.
      <br/>
      <br/>
      After that, you will get the results and play again.
    </p>
    <p className="onboarding-text score" >
      Can you score 100%?
    </p>
  </div>

const Circles = ({step}) =>
  <div className="onboarding-circles ">
    <div className={getCs(step, 'TWO')}></div>
    <div className={getCs(step, 'THREE')}></div>
</div>

function mapStateToProps(state) {
  const step = state.onboarding.step
  return {
    step
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding)
