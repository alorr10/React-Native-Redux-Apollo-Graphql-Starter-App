import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
} from '../actions/types'

const INITIAL_STATE = {
  count: 0,
}




const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: action.payload,
      }

    case DECREMENT_COUNT:
      return {
        ...state,
        count: action.payload,
      }

    case RESET_COUNT:
      return {
        ...state,
        count: 0,
      }

    default:
      return state

  }
}

export default counter