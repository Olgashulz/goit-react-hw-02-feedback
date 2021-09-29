import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={styles.statistics}>
      <h3 className={styles.title}> Statistics </h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          Good:
          <span className={styles.value}>{good}</span>
        </li>
        <li className={styles.item}>
          Neutral:
          <span className={styles.value}>{neutral}</span>
        </li>
        <li className={styles.item}>
          Bad:
          <span className={styles.value}>{bad}</span>
        </li>
        <li className={styles.item}>
          Total:
          <span className={styles.value}>{total}</span>
        </li>
        <li className={styles.item}>
          Positive feedback:
          <span className={styles.value}>
            {isNaN(positivePercentage) ? 0 : positivePercentage}%
          </span>
        </li>
      </ul>
      <p className={styles.massage}></p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
