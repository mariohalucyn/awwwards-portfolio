import * as React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './style.module.scss';
import variants from './animation';
import Button from './button/index';
import Navigation from './navigation/index';

function SideMenu({ isMenuActive, setIsMenuActive, menuRef }) {
  return (
    <div className={styles.wrapper} ref={menuRef}>
      <Button isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />

      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isMenuActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>{isMenuActive ? <Navigation /> : null}</AnimatePresence>
      </motion.div>
    </div>
  );
}

SideMenu.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  setIsMenuActive: PropTypes.func.isRequired,
  menuRef: PropTypes.func.isRequired,
};

export default SideMenu;
