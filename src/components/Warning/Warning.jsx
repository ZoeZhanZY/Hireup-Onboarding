import React from "react";
import styles from "./Warning.module.scss";


const Warning = ({warning}) => {
	return (<div className={styles.warning}>{warning}</div>)
};

export default Warning;
