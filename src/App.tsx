import { useState } from 'react'
import './App.css'
import Welcome from './Concepts/props' 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Welcome name="Fatima's Training Session" />

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          +1 {'->'} {count}
        </button>
      </div>
    </>
  );
}

export default App;
