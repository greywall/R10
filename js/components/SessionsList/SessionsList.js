import React from 'react';
import {SectionList, Text} from 'react-native';
import moment from 'moment';
import SessionListItem from '../SessionListItem';

const SessionsList = ({allSessions, navigation}) => (
  <SectionList
    sections={allSessions}
    keyExtractor={(item, index) => item + index}
    renderItem={({item}) => <SessionListItem item={item} />}
    renderSectionHeader={({section: {title}}) => (
      <Text>{moment(title).format('hh:mm a')}</Text>
    )}
    s
  />
);

export default SessionsList;
