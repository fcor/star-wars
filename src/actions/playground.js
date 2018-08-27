import * as actionTypes from '../constants/actionTypes'

export function letsPlay() {
  return {
    type: actionTypes.LETS_PLAY,
  }
}

export function seeResults() {
  return {
    type: actionTypes.SEE_RESULTS,
  }
}

export function lastFact() {
  return {
    type: actionTypes.LAST_FACT,
  }
}
