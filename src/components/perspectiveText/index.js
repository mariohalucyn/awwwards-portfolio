import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style.module.scss';

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

PerspectiveText.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PerspectiveText;
