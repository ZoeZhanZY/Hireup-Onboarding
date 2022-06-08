import React from "react";
import styles from "./TextInput.module.scss";
import BasicInput from "../BasicInput/BasicInput";
import Warning from "../Warning/Warning";

const TextInput = ({ label, warning, defaultValue }) => {
	return (
    <>
      
      <div className={styles.label}>{label}</div>
			<Warning warning={warning} />
			<BasicInput defaultValue={defaultValue} />
    </>
  );

};

export default TextInput;
