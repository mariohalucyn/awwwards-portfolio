import * as React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import * as styles from './style.module.scss';
import variants from './animation';
import Header from '../header';
import PerspectiveText from '../perspectiveText/index';

const heading = 'Framer Motion & and GSAP utils.';

function Hero({ isMenuActive, setIsMenuActive, menuRef }) {
  return (
    <div className={styles.outerWrapper}>
      <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} menuRef={menuRef} />
      <div className={styles.wrapper}>
        <p className={styles.heading}>
          {heading.split(' ').map((item, i) => (
            <span key={i} className={styles.mask}>
              <motion.span custom={i} variants={variants} initial="initial" animate="animate">
                {item}
              </motion.span>
            </span>
          ))}
        </p>
        <div className={styles.description}>
          <div className={styles.linksContainer}>
            <a href="/">
              <PerspectiveText label="design@studio.com" />
            </a>
            <a href="/">
              <PerspectiveText label="webflow@design.com" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  setIsMenuActive: PropTypes.func.isRequired,
  menuRef: PropTypes.func.isRequired,
};

export default Hero;
