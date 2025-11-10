import React from "react";

function Salary({ salary }) {
  console.log("Salary component rendered");
  return (
    <>
      <div>My salary is {salary}</div>
    </>
  );
}

export default React.memo(Salary);
