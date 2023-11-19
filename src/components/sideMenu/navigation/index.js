import * as React from 'react';
import { motion } from 'framer-motion';
import * as styles from './style.module.scss';
import { BodyLinks, FooterLinks } from './data';
import { perspective, slide } from './animation';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.body}>
        {BodyLinks.map(({ title, href }, i) => (
          <div key={`bodyLink_${i}`} className={styles.linkWrapper}>
            <motion.div
              custom={i}
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
        {FooterLinks.map(({ title, href }, i) => (
          <motion.div
            key={`footerLink_${i}`}
            custom={i}
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
