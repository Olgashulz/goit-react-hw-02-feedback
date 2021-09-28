import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
