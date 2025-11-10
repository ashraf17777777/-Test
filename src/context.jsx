/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const MrContext = createContext();

export function GlobalService({ children }) {
  const [state, setState] = useState("");
  const [temp, setTemp] = useState("");
  const doubleTheValue = () => {
    if (temp === "") return;
    setState(temp * 2);
  };
  const handleSetInitial = (value) => {
    setTemp(Number(value));
    if (value === "") {
      setState("");
    }
  };
  return (
    <MrContext.Provider
      value={{ state, doubleTheValue, handleSetInitial, temp }}
    >
      {children}
    </MrContext.Provider>
  );
}
