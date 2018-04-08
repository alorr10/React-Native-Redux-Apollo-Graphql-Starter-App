import React, { Component } from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  Animated,
  PanResponder
} from "react-native";
import { connect } from "react-redux";
import images from "../assets/images";
import { toggleMoodBoostContainer } from "../actions";
import moment from "moment";
import { Icon } from "react-native-elements";
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
const FILE_ENDPOINT =
  "https://api.graph.cool/file/v1/cjfrbfw8l079g0196cds4wibx";

class MoodBoostContainer extends React.Component {
  componentWillMount() {
    this.position = new Animated.ValueXY({ x: 0, y: 0 });
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => this.handleMove(gesture),
      onPanResponderRelease: (event, gesture) => this.handleRelease(gesture)
    });
  }

  handleRelease = gesture => {
    if (gesture.dy > 50) {
      Animated.timing(this.position, {
        toValue: { x: 0, y: SCREEN_HEIGHT },
        timing: 400
      }).start(),
        this.onClose();
    } else {
      Animated.spring(this.position, {
        toValue: { x: 0, y: 0 }
      }).start();
    }
  };

  handleMove = gesture => {
    if (gesture.dy > 0) this.position.setValue({ y: gesture.dy });
  };

  onClose = () => {
    const { toggleMoodBoostContainer } = this.props;
    toggleMoodBoostContainer(false);
  };

  render() {
    const { moodBoostContainerIsOpen, toggleMoodBoostContainer } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={moodBoostContainerIsOpen}
      >
        <View style={[styles.modalStyle]}>
          <Image
            style={styles.imageStyle}
            source={images.boost1}
            resizeMode="contain"
          />
          <Icon
            containerStyle={styles.iconStyle}
            name="x"
            type="feather"
            color="black"
            size={30}
            onPress={this.onClose}
          />
        </View>
      </Modal>
    );
  }
}

const styles = {
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  imageStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },

  iconStyle: {
    position: "absolute",
    top: 45,
    right: 5
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

// export default connect(mapStateToProps, mapDispatchToProps) (MoodBoostContainer)
export default MoodBoostContainer;

// export default compose(
//   connect(mapStateToProps, null),
//   //graphql(latestBrightenQuery, {name: 'getLatestBrightenQuery'}),
//   // graphql(findUser, {name: 'findCurrentUser'}, {
//   //   options: ({ icloudToken }) => ({ variables: '123' })
//   // }),
//   withLoadingComponent,
// ) (VisibleBrighten);
