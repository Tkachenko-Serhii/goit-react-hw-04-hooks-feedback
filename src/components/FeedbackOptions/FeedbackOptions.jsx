import React from 'react';
import PropTypes from 'prop-types';
import CapitalLetter from '../CapitalLetter';
import s from './FeedbackOptions.module.css';

export default function Buttons({ oneOfState, onChange }) {
  return (
    <ul className={s.list}>
      {oneOfState.map(key => (
        <li key={key} className={s.item}>
          <button
            onClick={e => onChange(e.target.value)}
            value={key}
            className={s.button}
          >
            {CapitalLetter(key)}
          </button>
        </li>
      ))}
    </ul>
  );
}

Buttons.propTypes = {
  oneOfState: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
