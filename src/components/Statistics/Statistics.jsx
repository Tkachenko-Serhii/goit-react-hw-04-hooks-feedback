import React from 'react';
import CapitalLetter from '../CapitalLetter';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css';

export default function Statistics(props) {
  return (
    <ul className={s.list}>
      {props.total > 0 ? (
        Object.keys(props).map(key => (
          <li key={key} className={s.item}>
            {key !== 'positiveFeedback'
              ? CapitalLetter(key) + ': ' + props[key] + ''
              : 'Positive feedback: ' + props[key] + '%'}
          </li>
        ))
      ) : (
        <Notification message="No feedback given" />
      )}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
