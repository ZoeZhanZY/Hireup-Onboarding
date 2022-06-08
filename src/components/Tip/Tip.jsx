import React from "react";
import styles from "./Tip.module.scss";

const Tip = ({ children}) => {
  return (
    <div className={styles.tip}>
			<p>{children}</p>
    </div>
  );
};

export default Tip;
