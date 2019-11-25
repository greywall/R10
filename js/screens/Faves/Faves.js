import React from 'react';
import {Text, View} from 'react-native';
import SessionList from '../../components/SessionsList';

const Faves = ({favedSessions}) => {
  console.log(favedSessions);
  if (favedSessions.length === 0) {
    return (
      <View>
        <Text>Your haven't faved any sessons yet.</Text>
      </View>
    );
  }
  return <SessionList Sessions={favedSessions} faveIds={faveIds} />;
};

export default Faves;
