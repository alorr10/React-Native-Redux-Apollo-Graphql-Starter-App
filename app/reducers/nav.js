import {
  TOGGLE_MOODBOOST_CONTAINER,
} from '../actions/types'

const INITIAL_STATE = {
  moodBoostContainerIsOpen: false,
}




const nav = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MOODBOOST_CONTAINER:
      return {
        ...state,
        moodBoostContainerIsOpen: action.payload,
      }

    default:
      return state

  }
}

export default nav