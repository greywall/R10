import React from 'react';
import {SectionList, Text, View} from 'react-native';
import moment from 'moment';
import SessionListItem from '../SessionListItem';
import styles from './style';
import {formatSessionData} from '../../lib/helpers';
import PropTypes from 'prop-types';

const SessionsList = ({sessions, navigation, faveIds}) => {
  return (
    sessions && (
      <SectionList
        sections={formatSessionData(sessions)}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <SessionListItem item={item} faveIds={faveIds} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.session}>{moment(title).format('h:mm A')}</Text>
        )}
      />
    )
  );
};

export default SessionsList;
