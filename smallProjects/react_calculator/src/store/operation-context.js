import React from "react";

const OpeartionContext = React.createContext({
  operand1: "",
  operator: "",
  operand2: "",
  newFlag: true,
  updateOperand1Handler: () => {},
  updateOperand2Handler: () => {},
  addHandler: () => {},
  mulHandler: () => {},
  subHandler: () => {},
  divHandler: () => {},
  resultHandler: () => {},
  resetHandler: () => {},
});

export default OpeartionContext;
