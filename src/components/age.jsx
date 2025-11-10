import React from "react";
function Age({ age }) {
  console.log("Age component rendered");
  return (
    <>
      <div>My age is {age}</div>
    </>
  );
}

export default React.memo(Age);
