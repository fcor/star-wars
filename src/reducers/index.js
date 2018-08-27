import { combineReducers } from  'redux'
import onboarding from './onboarding'
import playground from './playground'
import game from './game'

export default combineReducers({
  onboarding,
  playground,
  game
})
