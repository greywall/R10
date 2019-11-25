import React, {Component} from 'react';
import Speaker from './Speaker';
import {Text} from 'react-native';

class SpeakerContainer extends Component {
  render() {
    const speaker = this.props.navigation;
    // console.log(speaker);
    return <Speaker speaker={speaker} />;
  }
}

export default SpeakerContainer;
