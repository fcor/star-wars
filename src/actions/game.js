import * as actionTypes from '../constants/actionTypes'

export const requestDetails = () => ({
  type: actionTypes.REQUEST_DETAILS,
})

export const receiveDetails = (json) => ({
  type: actionTypes.RECEIVE_DETAILS,
  payload: {
    details: json
  }
})

export const fetchDetails = step => dispatch => {
  dispatch(requestDetails())
  return fetch(`https://swapi.co/api/people/${step}/`)
    .then(response => response.json())
    .then(json => dispatch(receiveDetails(json)))
}
