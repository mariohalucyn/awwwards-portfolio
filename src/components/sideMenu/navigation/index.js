import * as React from 'react';
import { motion } from 'framer-motion';
import * as styles from './style.module.scss';
import { BodyLinks, FooterLinks } from './data';
import { perspective, slide } from './animation';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.body}>
        {BodyLinks.map(({ title, href }, index) => (
          <div key={`bodyLink_${index}`} className={styles.linkWrapper}>
            <motion.div
              custom={index}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a href={href}>{title}</a>
            </motion.div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        {FooterLinks.map(({ title, href }, index) => (
          <motion.div
            key={`footerLink_${index}`}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <a href={href}>{title}</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
