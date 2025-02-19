import { useState } from "react";
import "./App.css";
import Welcome from "./Concepts/props";
import NameInput from "./Concepts/stateLifting";

function App() {
  const [name, setName] = useState(" "); 

  return (
    <>
      <Welcome name={name} />
      <NameInput onNameChange={setName} />
    </>
  );
}

export default App;
