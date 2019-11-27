import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = () => (
  <ActivityIndicator size="large" style={styles.loader} color="colors.purple" />
);

export default Loader;
