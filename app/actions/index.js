import { INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT  } from './types'

export const incrementCounter = payload => {
  return {
    type: INCREMENT_COUNT,
    payload
  }
}

export const decrementCounter = payload => {
  return {
    type: DECREMENT_COUNT,
    payload
  }
}

export const resetCounter = () => {
  return {
    type: RESET_COUNT,
  }
}