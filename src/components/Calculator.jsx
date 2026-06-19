import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const clear = () => {
    setInputValue("");
  };
  return (
    <div>
      <h1>Calculator</h1>
      <form name="calc">
        <input type="text" value={inputValue} />
        <span onClick={() => clear()}>c</span>
      </form>
    </div>
  );
};

export default Calculator;
