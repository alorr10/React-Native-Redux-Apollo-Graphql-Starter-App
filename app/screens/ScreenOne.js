import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import MoodBoostContainer from "../containers/MoodBoostContainer";
import { toggleMoodBoostContainer } from "../actions";
class ScreenOne extends React.Component {
  showMoodBoost = () => {
    this.props.toggleMoodBoostContainer(!this.props.moodBoostContainerIsOpen);
  };
  render() {
    const { moodBoostContainerIsOpen, toggleMoodBoostContainer } = this.props;
    return (
      <View style={styles.container}>
        <Button
          title="Show Today's Boost"
          onPress={() => this.showMoodBoost()}
        />
        <MoodBoostContainer
          moodBoostContainerIsOpen={moodBoostContainerIsOpen}
          toggleMoodBoostContainer={toggleMoodBoostContainer}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFBE00"
  }
};

const mapStateToProps = state => {
  return {
    moodBoostContainerIsOpen: state.nav.moodBoostContainerIsOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMoodBoostContainer: open => {
      dispatch(toggleMoodBoostContainer(open));
    }
  };
};

// export default ScreenOne
export default connect(mapStateToProps, mapDispatchToProps)(ScreenOne);
