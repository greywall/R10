import React from 'react';
import SessionList from '../../components/SessionsList/';
import {formatSessionData} from '../../lib/helpers';

const Schedule = ({Sessions, faveIds}) => {
  return (
    <SessionList Sessions={formatSessionData(Sessions)} faveIds={faveIds} />
  );
};

export default Schedule;
