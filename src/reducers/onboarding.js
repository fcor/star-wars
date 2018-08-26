import * as actionTypes from '../constants/actionTypes'

const initialState = {
  step: "ONE"
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ONBOARDING_STEP:
        return {
          step: action.payload.step
        }
    default:
      return state
  }
}
