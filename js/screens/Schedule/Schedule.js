import React from 'react';
import SessionList from '../../components/SessionsList/';
import PropTypes from 'prop-types';

const Schedule = ({sessions, faveIds}) => {
  return <SessionList sessions={sessions} faveIds={faveIds} />;
};

Schedule.propTypes = {
  sessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default Schedule;
