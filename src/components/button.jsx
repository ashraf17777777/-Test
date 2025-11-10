import React from "react";

function Button({ text, action }) {
  console.log("Salary Button component rendered");
  return <button onClick={action}>{text}</button>;
}

export default React.memo(Button);
// React.memo saves a copy for
// Button component in memory and prevents it from re-rendering unless its props (text or action) change.
