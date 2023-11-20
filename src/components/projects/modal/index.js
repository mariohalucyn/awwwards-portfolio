import * as React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import projects from '../data';
import * as styles from './style.module.scss';

function Modal({ modal }) {
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalSlider}>
        {projects.map(({ title, src, color }, index) => {
          const image = getImage(data[src]);

          return (
            <div className={styles.modal} key={index} style={{ backgroundColor: color }}>
              <GatsbyImage image={image} alt={title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Modal.propTypes = {
  modal: PropTypes.shape({
    active: PropTypes.bool,
    index: PropTypes.string,
  }).isRequired,
};

export default Modal;
