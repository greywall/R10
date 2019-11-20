import React from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Speaker />;
  }
}

export default SpeakerContainer;
