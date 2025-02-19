import { useState } from "react";
import "./App.css";
import Welcome from "./Concepts/props";

function App() {
  const [inputValue, setInputValue] = useState("");
  const name = inputValue.trim() ? inputValue : "";

  return (
    <div className="container">
      <div className={`welcome-container ${name ? "" : "hidden"}`}>
        <Welcome name={name} />
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;
