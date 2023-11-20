import * as React from 'react';
import { useState } from 'react';
import * as styles from './style.module.scss';
import projects from './data';
import Project from './project';
import Modal from './modal';

function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className={styles.wrapper}>
      <div className={styles.projects}>
        {projects.map(({ title }, index) => (
          <Project
            className={styles.project}
            key={index}
            index={index}
            title={title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} />
    </div>
  );
}

export default Projects;
