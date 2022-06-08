import React from "react";
import styles from "./Register.module.scss";
import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";
import Tip from "../../components/Tip/Tip";
import TextInput from "../../components/TextInput/TextInput";

const userTypeList = [
  "I'm looking for support",
  " I want to provide support",
  " I’m a coordinator",
  " I’m a disability services provider",
];

const tipsForUser1 =
  "To use Hireup, people with disability can either: Hireup can also accept other alternative funding types, but please call our team on (02) 8294 7669 to ensure that we can facilitate it.";
const userType1List = ["for me", "Someone else"];
const Register = () => {
  return (
    <div class={styles.registerBox}>
      <Paper pageTitle={"Register"} pageDescription={"Get started with Hireup"}>
        <div class={styles.content}>
          <div className={styles.buttonList}>
            {userTypeList.map((userType) => (
              <Button text={userType} />
            ))}
          </div>
          <div className={styles.buttonList}>
            <h2>Who is this account for?</h2>
            {userType1List.map((userType) => (
              <Button text={userType} />
            ))}
          </div>
          <Tip>{tipsForUser1}</Tip>
          <TextInput
            label={"First Name"}
            warning={"Please enter your first name"}
            defaultValue={"Your first name"}
          />
        </div>
      </Paper>
    </div>
  );
};

export default Register;
