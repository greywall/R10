import React from 'react';
import {SectionList, Text} from 'react-native';
import moment from 'moment';
import SessionListItem from '../SessionListItem';
import styles from './style';

const SessionsList = ({sessions, navigation, faveIds, favedSessions}) => (
  <SectionList
    sections={sessions}
    keyExtractor={(item, index) => item + index}
    renderItem={({item}) => <SessionListItem item={item} faveIds={faveIds} />}
    renderSectionHeader={({section: {title}}) => (
      <Text style={styles.session}>{moment(title).format('h:mm A')}</Text>
    )}
    s
  />
);

export default SessionsList;
