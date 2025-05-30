import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const minValue = 0;

  const handleIncrement = () => {
    setCount((prevCounter) => prevCounter + step);
  };

  const handleDeacrement = () => {
    if (count - step >= minValue) {
      setCount((prevCounter) => prevCounter - step);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSteapChange = (event) => {
    setStep(Number(event.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>
      <div style={{ fontSize: "48px", margin: "20px" }}>
        <span>{count}</span>
      </div>

      <div>
        <button onClick={handleIncrement}>Increase by {step}</button>
        <button onClick={handleDeacrement}>Decrease by {step}</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>
          Set Increment/Decrement Step:
          <input
            type="number"
            value={step}
            onChange={handleSteapChange}
            min="1"
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
