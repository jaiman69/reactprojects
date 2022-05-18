import React from "react";
import OpeartionContext from "./operation-context";

const calculate = (state) => {
  switch (state.operator) {
    case "+":
      return Number(state.operand1) + Number(state.operand2);

    case "-":
      return Number(state.operand1) - Number(state.operand2);

    case "*":
      return Number(state.operand1) * Number(state.operand2);

    case "/":
      return Number(state.operand1) / Number(state.operand2);

    default:
      return "";
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "op1Update":
      if (state.operand2.toString().length === 0) {
        return state;
      } else if (state.operand1.toString().length > 0) {
        return {
          ...state,
          operand1: calculate(state),
          operand2: "",
        };
      } else {
        return {
          ...state,
          operand1: state.operand2,
          operand2: "",
        };
      }

    case "op2Update":
      return {
        ...state,
        operand2: state.newFlag ? action.value : state.operand2 + action.value,
        newFlag: false,
      };

    case "ADD":
      return {
        ...state,
        operator: "+",
      };

    case "SUB":
      if (state.operand1.toString().length === 0) {
        return {
          ...state,
          operand2: "-",
        };
      }
      return {
        ...state,
        operator: "-",
      };

    case "MUL":
      return {
        ...state,
        operator: "*",
      };

    case "DIV":
      return {
        ...state,
        operator: "/",
      };

    case "RESULT":
      return {
        newFlag: true,
        operand2: calculate(state),
        operand1: "",
        operator: "",
      };

    case "RESET":
      return {
        operand1: "",
        operator: "",
        operand2: "",
        newFlag: true,
      };

    default:
      return state;
  }
};

const OperationProvider = (props) => {
  const initialValue = {
    operand1: "",
    operator: "",
    operand2: "",
    newFlag: true,
  };

  const [operationData, operationDispatch] = React.useReducer(
    reducer,
    initialValue
  );

  const updateOperand1Handler = () => {
    operationDispatch({ type: "op1Update" });
  };

  const updateOperand2Handler = (value) => {
    operationDispatch({ type: "op2Update", value: value });
  };

  const addHandler = () => {
    updateOperand1Handler();
    operationDispatch({ type: "ADD" });
  };

  const mulHandler = () => {
    updateOperand1Handler();
    operationDispatch({ type: "MUL" });
  };

  const subHandler = () => {
    updateOperand1Handler();
    operationDispatch({ type: "SUB" });
  };

  const divHandler = () => {
    updateOperand1Handler();
    operationDispatch({ type: "DIV" });
  };

  const resultHandler = () => {
    operationDispatch({ type: "RESULT" });
  };

  const resetHandler = () => {
    operationDispatch({ type: "RESET" });
  };

  return (
    <OpeartionContext.Provider
      value={{
        ...operationData,
        addHandler,
        mulHandler,
        divHandler,
        subHandler,
        resetHandler,
        resultHandler,
        updateOperand2Handler,
      }}
    >
      {props.children}
    </OpeartionContext.Provider>
  );
};

export default OperationProvider;
