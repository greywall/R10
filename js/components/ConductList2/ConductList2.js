import React, {Component} from 'react';
import {
  TouchableOpacity,
  SectionList,
  Text,
  View,
  LayoutAnimation,
  Animated,
} from 'react-native';
import styles from './styles';

class ConductList2 extends Component {
  state = {
    isCollapsed: true,
    rotateAnimation: new Animated.Value(0),
  };
  resetRotateAnimation() {
    this.setState({
      rotateAnimation: new Animated.Value(0),
    });
  }

  rotate() {
    Animated.timing(this.state.rotateAnimation, {
      duration: 500,
      toValue: 1,
    }).start(animation => {
      if (animation.finished) {
        this.resetRotateAnimation();
      }
    });
  }
  onPress() {
    LayoutAnimation.spring();
    this.rotate();
    this.setState({isCollapsed: !this.state.isCollapsed});
  }
  render() {
    // const {conduct} = this.props;
    const {isCollapsed, rotateAnimation} = this.state;
    const angle = rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View>
        <TouchableOpacity onPress={() => this.onPress()}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Animated.Text
              style={[
                styles.accordionHeader,
                {
                  fontSize: 24,
                  transform: [{rotate: angle}],
                },
              ]}>
              +
            </Animated.Text>
            <Text style={[styles.accordionHeader, {flex: 1}]}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
        {!isCollapsed && <Text>{this.props.description}</Text>}
      </View>
    );
  }
}

export default ConductList2;
