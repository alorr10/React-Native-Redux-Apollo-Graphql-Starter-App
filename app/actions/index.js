import { INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT, TOGGLE_MOODBOOST_CONTAINER } from './types'


export const toggleMoodBoostContainer = isOpen => {
  return {
    type: TOGGLE_MOODBOOST_CONTAINER,
    payload: isOpen,
  }
}