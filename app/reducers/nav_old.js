import { AppNavigator } from '../navigation/RootNavigator';

const nav = (state, action) => {
  return AppNavigator.router.getStateForAction(action,state)
}

export default nav

