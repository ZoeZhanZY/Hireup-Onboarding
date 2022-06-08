import React from "react";
import styles from "./Header.module.scss";
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <div className={styles.appHeader}>
      <img src={logo} alt="logo"/>
    </div>
  );
};

export default Header;
