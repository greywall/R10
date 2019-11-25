import React from 'react';
import Schedule from './Schedule';
import {ALL_DATA_QUERY} from '../../config/api';
import {Query} from 'react-apollo';
import {Text} from 'react-native';
import {FavesContext} from '../../context/FavesContext';

class ScheduleContainer extends React.Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={ALL_DATA_QUERY}>
            {({loading, error, data}) => {
              if (loading) return <Text>Loading</Text>;
              if (error) return <Text>{error.message}/</Text>;
              if (data) {
                return (
                  <Schedule sessions={data.allSessions} faveIds={faveIds} />
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default ScheduleContainer;
