import * as actionTypes from '../constants/actionTypes'

const initialState = {
  isFetching: true,
  details: null,
  step: 1
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_DETAILS:
        return {
          isFetching: true
        }
    case actionTypes.RECEIVE_DETAILS:
        return {
          isFetching: false,
          details: action.payload.details
        }
    default:
      return state
  }
}
