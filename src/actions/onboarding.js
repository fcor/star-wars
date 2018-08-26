import * as actionTypes from '../constants/actionTypes'

export function setStep(step) {
  return {
    type: actionTypes.ONBOARDING_STEP,
    payload: {
      step
    }
  }
}
