import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style.module.scss';
import SideMenu from '../sideMenu';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

function Header({ isMenuActive, setIsMenuActive, menuRef }) {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <SideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} menuRef={menuRef} />
    </div>
  );
}

Header.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  setIsMenuActive: PropTypes.func.isRequired,
  menuRef: PropTypes.func.isRequired,
};

export default Header;
