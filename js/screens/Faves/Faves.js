import React from 'react';
import {Text, View} from 'react-native';
import SessionList from '../../components/SessionsList';

const Faves = (favedSessions, faveIds) => {
  if (favedSessions.length === 0) {
    return (
      <View>
        <Text style={style.noFaved}>Your haven't faved any sessons yet.</Text>
      </View>
    );
  }
  return <SessionList sessions={favedSessions} faveIds={faveIds} />;
};

export default Faves;
