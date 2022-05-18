import React from "react";
import Numbers from "./components/keyboard/Numbers";
import Operations from "./components/keyboard/Operations";
import Screen from "./components/visible/Screen";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.calculator}>
      <Screen />
      <div className={styles.keyboard}>
        <Numbers />
        <Operations />
      </div>
    </div>
  );
};

export default App;
