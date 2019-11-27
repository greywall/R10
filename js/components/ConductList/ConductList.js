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
import PropTypes from 'prop-types';

export default class ConductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      sign: true,
      rotationValue: new Animated.Value(0),
    };
  }

  render() {
    const spin = this.state.rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            if (!this.state.expanded) {
              Animated.timing(this.state.rotationValue, {
                duration: 1000,
                toValue: 1,
              }).start(animation => {
                if (animation.finished) {
                  this.setState({rotationValue: new Animated.Value(0)});
                  this.setState({sign: !this.state.sign});
                }
              });
            } else {
              this.setState({sign: !this.state.sign});
            }

            LayoutAnimation.easeInEaseOut();
            this.setState({expanded: !this.state.expanded});
          }}>
          <View style={styles.plusMinusContainer}>
            <Animated.Text
              style={[styles.plusMinus, {transform: [{rotate: spin}]}]}>
              {this.state.sign ? '+' : '-'}
            </Animated.Text>

            <Text style={styles.conductTitle}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
        {this.state.expanded && (
          <Text style={styles.conductDescription}>
            {this.props.description}
          </Text>
        )}
      </View>
    );
  }
}

CodeOfConduct.propTypes = {
  expanded: PropTypes.bool,
  sign: PropTypes.bool,
};
