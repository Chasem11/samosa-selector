import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
        <div className="header">
          <h1>Samosa Selector</h1>
          <h2>Count: {count}</h2>
          <img className="samosa" src="https://t4.ftcdn.net/jpg/05/11/08/05/360_F_511080597_NvqjRdezlARSQHy4VpAKFvUVTEeGdlLy.jpg" onClick={updateCount} />
        </div>
    </div>
  )
}

export default App
