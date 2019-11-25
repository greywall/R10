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
    this.getFavedSessionId();
  }

  getFavedSessionId = async () => {
    try {
      const faves = await getAllFaves();
      const faveIds = faves.map(fave => fave[0]);
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
      this.getFavedSessionId();
    } catch (e) {
      console.log(e);
    }
  };

  removeFaveSessionId = async sessionId => {
    try {
      await removeFaves(sessionId);
      this.getFavedSessionId();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSessionId: this.addFaveSessionId,
          removeFaveSessionId: this.removeFaveSessionId,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
