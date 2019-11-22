import React from 'react';
import {Text, View} from 'react-native';
import {Session_DATA} from '../../config/api';
import {Query} from 'react-apollo';

const Session = () => {
  return (
    <Query query={Session_DATA}>
      {({loading, error, data}) => {
        if (loading) return <Text>Loading</Text>;
        if (error) return <Text>{error.message}/</Text>;

        if (data) {
          return;
          <View Session={data.Session((id: $id))} />;
        }
      }}
    </Query>
  );
};

export default Session;
