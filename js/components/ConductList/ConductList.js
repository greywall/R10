import React, {Component} from 'react';
import {
  TouchableOpacity,
  SectionList,
  Text,
  View,
  LayoutAnimation,
} from 'react-native';

class ConductList extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          this.setState({expanded: !this.state.expanded});
        }}>
        <View>
          <Text>{this.props.title}</Text>

          {this.state.expanded ? (
            <Text>{this.props.description}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default ConductList;
