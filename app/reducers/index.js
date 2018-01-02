import { combineReducers } from "redux";
import nav from './nav';
import counter from './counter'

const reducer = combineReducers({
    nav,
    counter,
  })

export default reducer
