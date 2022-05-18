import React from "react";
import styles from "./Screen.module.css";
import OpeartionContext from "../../store/operation-context";

const Screen = (props) => {
  const operationCtx = React.useContext(OpeartionContext);

  return (
    <div className={styles.screen}>
      <div className={styles.typed}>{operationCtx.operand1}</div>
      <div className={styles.operator}>{operationCtx.operator}</div>
      <div className={styles.typing}>{operationCtx.operand2}</div>
    </div>
  );
};

export default Screen;
