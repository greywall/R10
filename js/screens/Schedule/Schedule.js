import React from 'react';
import SessionList from '../../components/SessionsList/';
import {formatSessionData} from '../../lib/helpers';

const Schedule = ({allSessions}) => {
  return <SessionList allSessions={formatSessionData(allSessions)} />;
};

export default Schedule;
