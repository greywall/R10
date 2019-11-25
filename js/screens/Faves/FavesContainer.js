import React from 'react';
import Faves from './Faves';
import {FavesContext} from '../../context/FavesContext';
import {ALL_DATA_QUERY} from '../../config/api';
import {Query} from 'react-apollo';

class FavesContainer extends React.Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={ALL_DATA_QUERY}>
            {({loading, error, data}) => {
              if (loading) return <Text>Loading</Text>;
              if (error) return <Text>{error.message}</Text>;
              if (data) {
                const favedSessions = data.allSessions.filter(session => {
                  return faveIds.includes(session.id);
                });
                return <Faves favedSessions={favedSessions} />;
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
