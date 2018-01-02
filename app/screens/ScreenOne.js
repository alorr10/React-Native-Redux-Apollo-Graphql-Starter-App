import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import IncreaseCounterContainer from '../containers/IncreaseCounterContainer'

class ScreenOne extends React.Component {

  render() {
    const { navigation } = this.props
    return (
        <View style={styles.container}>
          <IncreaseCounterContainer />
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBE00',
  },
}

// const mapStateToProps = state => {
//   return {
//     user: state.users
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     shouldAuthenticateUser: () => { dispatch(shouldAuthenticateUser()) },
//   }
// }

export default ScreenOne
// export default connect(mapStateToProps, mapDispatchToProps) (ScreenOne);
