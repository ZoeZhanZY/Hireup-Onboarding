import React from "react";
import '../src/styles/global.scss'
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Register from "./pages/Register/Register";

function App() {
	return (
    <>
      <Header />
      <div className={styles.container}>
        <Register />
      </div>
    </>
  );
}

export default App;
