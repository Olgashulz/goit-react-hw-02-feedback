import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log(onLeaveFeedback)
  return (
    <div className={styles.buttonsBox}>
      {options.map(textBtn => (
        <Button
          key={textBtn}
          textBtn={textBtn}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
