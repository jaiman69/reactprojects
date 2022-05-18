import React from "react";
import styles from "./Numbers.module.css";
import OpeartionContext from "../../store/operation-context";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Numbers = () => {

  const operationCtx = React.useContext(OpeartionContext);

  const numberHandler = (e) => {
    operationCtx.updateOperand2Handler(e.target.value);
  };

  return (
    <div className={styles.numbers}>
      {numbers.map((n) => (
        <button key={n} value={n} onClick={numberHandler}>
          {n}
        </button>
      ))}
    </div>
  );
};

export default Numbers;
