import React from 'react';
import Map from './Map';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Map />;
  }
}

export default MapContainer;
