import * as actionTypes from '../constants/actionTypes'

const initialState = {
  isFetching: true,
  details: null,
  step: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_DETAILS:
        return {
          isFetching: true,
          details: null,
          step: action.payload.step
        }
    case actionTypes.RECEIVE_DETAILS:
        return {
          isFetching: false,
          step: state.step,
          details: action.payload.details
        }
    default:
      return state
  }
}
