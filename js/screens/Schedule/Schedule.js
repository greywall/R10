import React from 'react';
import {Text, ScrollView, View, Button} from 'react-native';
import SessionList from '../../components/SessionsList/';
import {formatSessionData} from '../../lib/helpers';

const Schedule = ({navigation, allSessions}) => {
  return <SessionList allSessions={formatSessionData(allSessions)} />;
};

export default Schedule;
