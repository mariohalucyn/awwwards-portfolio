import * as React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import * as styles from './style.module.scss';
import PerspectiveText from '../../perspectiveText/index';

function Button({ isMenuActive, setIsMenuActive }) {
  return (
    <div className={styles.wrapper} onClick={() => setIsMenuActive(!isMenuActive)}>
      <motion.div
        className={styles.slider}
        animate={{ top: isMenuActive ? '-100%' : '0' }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
      >
        <div className={styles.elem}>
          <PerspectiveText label="Menu" />
        </div>

        <div className={styles.elem}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

Button.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  setIsMenuActive: PropTypes.func.isRequired,
};

export default Button;
