import React from "react";
import styles from "./Paper.module.scss";

const Paper = ({ pageTitle, pageDescription, children }) => {
  return (
    <div className={styles.paper}>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      <p className={styles.pageDescription}>{pageDescription}</p>
      {children}
    </div>
  );
};

export default Paper;
