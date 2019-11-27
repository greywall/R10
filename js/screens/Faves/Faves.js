import React from 'react';
import {Text, View} from 'react-native';
import SessionList from '../../components/SessionsList';
import PropTypes from 'prop-types';
import styles from './styles';

const Faves = ({favedSessions = [], faveIds}) => {
  if (favedSessions.length === 0) {
    return (
      <View style={styles.errorMessage}>
        <Text style={styles.errorText}>
          Your haven't faved any sessons yet.
        </Text>
      </View>
    );
  }
  return <SessionList sessions={favedSessions} faveIds={faveIds} />;
};

Faves.propTypes = {
  favedSessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default Faves;
