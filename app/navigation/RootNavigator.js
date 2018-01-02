import React from 'react';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'
import { connect } from 'react-redux'

const routeConfiguration = {
  One: {
    screen: ScreenOne,
    navigationOptions: {
      tabBarLabel: 'Send',
      tabBarIcon: ({ tintColor }) => <Icon name='sc-telegram' type='evilicon' size={30} color={tintColor} />
    },
  },
  Two: {
    screen: ScreenTwo,
    navigationOptions: {
      tabBarLabel: 'Open',
      tabBarIcon: ({ tintColor }) => <Icon name='gift' type='octicon' size={30} color={tintColor} />
    }

  }
}

const tabNavigatorConfiguration = {
  tabBarOptions: {
    style: {
      height: 60,
      backgroundColor: '#262626'
    },
  }
}

export const AppNavigator = TabNavigator(routeConfiguration, tabNavigatorConfiguration)

const RootNavigator = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);


const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(RootNavigator);
