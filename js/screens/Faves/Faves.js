import React from 'react';
import {Text, View} from 'react-native';
import SessionList from '../../components/SessionsList';

const Faves = ({favedSessions = [], faveIds}) => {
  console.log(favedSessions, 'Big Test');
  if (favedSessions.length === 0) {
    return (
      <View>
        <Text>Your haven't faved any sessons yet.</Text>
      </View>
    );
  }
  return <SessionList sessions={favedSessions} faveIds={faveIds} />;
};

export default Faves;
