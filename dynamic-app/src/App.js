import React, { useState } from "react";
import "./App.css";

function App() {
  const [Text, setText] = useState("");

  const handleChanges = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Dynamic App</h1>
      <input
        type="text"
        value={Text}
        onChange={handleChanges}
        placeholder="Type something..."
      />
      <p>You typed: {Text}</p>
    </div>
  );
}

export default App;
