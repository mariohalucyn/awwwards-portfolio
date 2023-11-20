import * as React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import projects from '../data';
import * as styles from './style.module.scss';
import variants from './animation';

function Modal({ modal }) {
  const containerRef = useRef(null);

  const data = useStaticQuery(graphql`
    query {
      c2montreal: file(relativePath: { regex: "modal/c2montreal.png/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      officeStudio: file(relativePath: { regex: "modal/officestudio.png/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      locomotive: file(relativePath: { regex: "modal/locomotive.png/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      silencio: file(relativePath: { regex: "modal/silencio.png/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
    }
  `);

  const { active, index } = modal;

  useEffect(() => {
    const moveContainerX = gsap.quickTo(containerRef.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    const moveContainerY = gsap.quickTo(containerRef.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
    });
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={styles.wrapper}
      variants={variants}
      initial="initial"
      animate={active ? 'animate' : 'exit'}
      exit="exit"
    >
      <div className={styles.modalSlider} style={{ top: `${index * -100}%` }}>
        {projects.map(({ title, src, color }, i) => {
          const image = getImage(data[src]);

          return (
            <div className={styles.modal} key={i} style={{ backgroundColor: color }}>
              <GatsbyImage image={image} alt={title} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

Modal.propTypes = {
  modal: PropTypes.shape({
    active: PropTypes.bool,
    index: PropTypes.string,
  }).isRequired,
};

export default Modal;
