import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ textBtn, onLeaveFeedback }) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={event => onLeaveFeedback(event)}
    >
      {textBtn}
    </button>
  );
}

Button.propTypes = {
  textBtn: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func,
};
