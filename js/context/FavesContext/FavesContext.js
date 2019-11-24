import React, {Component} from 'react';
export const FavesContext = React.createContext();
import {getAllFaves, removeFaves, addFaves} from '../../config/models';

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  componentDidMount() {
    this.getFaveSessionId();
  }

  getFaveSessionId = async () => {
    try {
      const faves = await getAllFaves();
      const ids = faves.map(fave => fave[0]);
      this.setState({faveIds});
    } catch (e) {
      console.log(e);
    }
  };

  addFaveSessionId = async sessionId => {
    try {
      const newFav = await addFaves(sessionId);
      if (newFav) {
        this.setState({faveIds: [...this.state.faveIds, newfav.Id]});
      }
      this.getFaveSessionId();
    } catch (e) {
      console.log(e);
    }
  };

  removeFaveSessionId = async sessionId => {
    try {
      await removeFaves(sessionId);
      this.getFaveSessionId();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSessionId: this.addFaves,
          removeFaveSessionId: this.removeFaves,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
