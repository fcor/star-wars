import * as actionTypes from '../constants/actionTypes'

export const requestDetails = (newStep) => ({
  type: actionTypes.REQUEST_DETAILS,
  payload: {
    step: newStep
  }
})

export const receiveDetails = (json) => ({
  type: actionTypes.RECEIVE_DETAILS,
  payload: {
    details: json
  }
})

export const fetchDetails = step => dispatch => {
  const newStep = step + 1
  dispatch(requestDetails(newStep))
  return fetch(`https://swapi.co/api/people/${newStep}/`)
    .then(response => response.json())
    .then(json => dispatch(receiveDetails(json)))
}
