import React from 'react';
import SessionList from '../../components/SessionsList/';
import {formatSessionData} from '../../lib/helpers';

const Schedule = ({sessions, faveIds}) => {
  return <SessionList sessions={sessions} faveIds={faveIds} />;
};

export default Schedule;
