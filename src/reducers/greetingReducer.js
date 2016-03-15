import { SET_GREETING } from '../actions/actions'

let initialState = 'Hello world.'

export default function greetingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GREETING:
      return action.greeting;
    default:
      return state;
  }
}
