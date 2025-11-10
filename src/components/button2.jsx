import React from "react";
function Button2({ action2 }) {
  console.log("Age Button2 rendered");
  return (
    <>
      <button onClick={action2}>Age Increment</button>
    </>
  );
}

export default React.memo(Button2);
