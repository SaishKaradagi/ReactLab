import React from "react";
import "./App.css";
import Header from "./Header";
import Fotter from "./Fottter";
function App() {
  const tittle = "Welome to React Props Demo";
  const tagline = "This is a simple demonstration of passing props in React.";
  const copyright = "© 2023 React Props Demo";

  return (
    <div className="App">
      <Header tittle={tittle} />
      <Fotter tagLine={tagline} copyright={copyright} />
    </div>
  );
}

export default App;
