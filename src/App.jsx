/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Age from "./components/age.jsx";
import Salary from "./components/salary.jsx";
import Button from "./components/button.jsx";
import Button2 from "./components/button2.jsx";
function App() {
  const [salary, setSalary] = useState(17000);
  const [age, setAge] = useState(25);

  const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary]);

  const incrementAge = useCallback(() => setAge(age + 1), [age]);

  return (
    <>
      <Age age={age} />
      <Salary salary={salary} />
      <Button text={"Salary Increment"} action={incrementSalary} />
      <Button2 action2={incrementAge} />
    </>
  );
}

export default App;
