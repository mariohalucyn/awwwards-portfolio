import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style.module.scss';

function Project({ index, title, setModal }) {
  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h2>{title}</h2>
      <p>Design and & Development</p>
    </div>
  );
}

Project.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default Project;
