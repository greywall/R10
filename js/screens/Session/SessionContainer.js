import React, {Component} from 'react';
import Session from './Session';
import {Query} from 'react-apollo';
import {Session_DATA} from '../../config/api';
import {Text} from 'react-native';
import {SPEAKER_QUERY} from '../../config/api';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };
  render() {
    const id = this.props.navigation.getParam('id');
    return (
      <FavesContext.Consumer>
        {({faveIds, addFaveSessionId, removeFaveSessionId}) => (
          <Query variables={{id}} query={Session_DATA}>
            {({loading, error, data}) => {
              if (loading) return <Text>Loading</Text>;
              if (error) return <Text>{error.message}/</Text>;

              if (data) {
                return (
                  <Session
                    session={data.Session}
                    navigation={this.props.navigation}
                    faveIds={faveIds}
                    addFaveSessionId={addFaveSessionId}
                    removeFaveSessionId={removeFaveSessionId}
                  />
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
