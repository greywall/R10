import React from 'react';
import SectionList from 'react-native';
import {ALL_DATA_QUERY} from '../../config/api';
import {Query} from 'react-apollo';
import {Text} from 'react-native';
import Schedule from './Schedule';

class ScheduleContainer extends React.Component {
  render() {
    return (
      <Query query={ALL_DATA_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}/</Text>;
          console.log(data);
          if (data) {
            return <Schedule allSessions={data.allSessions} />;
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
