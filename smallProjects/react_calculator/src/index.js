import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import OperationProvider from "./store/operationProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <OperationProvider>
    <App />
  </OperationProvider>
);
