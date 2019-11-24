import React, {Component} from 'react';
import {
  TouchableOpacity,
  SectionList,
  Text,
  View,
  LayoutAnimation,
  Animated,
  Style,
} from 'react-native';

class ConductList extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false, spinValue: new Animated.Value(0)};
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          this.setState({expanded: !this.state.expanded});
          Animated.timing(this.state.spinValue, {
            toValue: 1,
            duration: 500,
          }).start();
          this.setState.spinValue: new Animated.value(0)
        }}>
        <View>
          <Animated.Text style={{transform: [{rotate: spin}]}}>
            +{' '}
          </Animated.Text>
          <Text>{this.props.title}</Text>
        </View>
        {this.state.expanded ? (
          <Text>{this.props.description}</Text>
        ) : (
          <Text></Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default ConductList;




