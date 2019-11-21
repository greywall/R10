import React from 'react';
import {SectionList, Text, View} from 'react-native';

const SessionListItem = ({allSessions}) => (
  <View>
    <Text>{(allSessions = allSessions.title)}</Text>
  </View>
);

export default SessionListItem;
