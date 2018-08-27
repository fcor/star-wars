import * as actionTypes from '../constants/actionTypes'

const initialState = {
  step: "ONBOARDING"
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LETS_PLAY:
        return {
          step: "GAME"
        }
    case actionTypes.SEE_RESULTS:
        return {
          step: "RESULTS"
        }
    default:
      return state
  }
}
