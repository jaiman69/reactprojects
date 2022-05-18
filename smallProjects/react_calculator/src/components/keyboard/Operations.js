import React from "react";
import styles from "./Operations.module.css";
import OpeartionContext from "../../store/operation-context";

const Operations = () => {
  const operationCtx = React.useContext(OpeartionContext);

  return (
    <div className={styles.operation}>
      <button onClick={operationCtx.resetHandler}>AC</button>
      <button onClick={operationCtx.addHandler}>+</button>
      <button onClick={operationCtx.subHandler}>-</button>
      <button onClick={operationCtx.mulHandler}>*</button>
      <button onClick={operationCtx.divHandler}>/</button>
      <button onClick={operationCtx.resultHandler}>=</button>
    </div>
  );
};

export default Operations;
