import React from "react";
import styles from "./BasicInput.module.scss";

const BasicInput = ({defaultValue}) => {
  return (
    <>
  
			<input className={styles.basicInput} placeholder={defaultValue}/>
    </>
  );
};

export default BasicInput;
