import React, { useState } from "react";

const Button = () => {
  const [number, setNumber] = useState("");

  console.log("this is the number variable value", number);
  const addNumber = () => {
    setNumber((number) => number + 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={addNumber}>add</button>
    </div>
  );
};

export default Button;
