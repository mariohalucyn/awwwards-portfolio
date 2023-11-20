import * as React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import projects from '../data';
import * as styles from './style.module.scss';

function Modal({ modal }) {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "modal/" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalSlider}>
        {projects.map(({ title, color }, index) => {
          const image = getImage(data.allFile.edges[index].node.childImageSharp.gatsbyImageData);

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
