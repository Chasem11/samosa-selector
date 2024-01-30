import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const upgrades = [
    { name: 'Double Stuffed 👯‍♀️', description: '2x per click', cost: '10 samosas' },
    { name: 'Party Pack 🎉', description: '5x per click', cost: '100 samosas' },
    { name: 'Full Feast 👩🏽‍🍳', description: '10x per click', cost: '1000 samosas' },
  ];

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
        <div className="header">
          <h1>Samosa Selector</h1>
          <h2>Count: {count}</h2>
          <img className="samosa" src="https://t4.ftcdn.net/jpg/05/11/08/05/360_F_511080597_NvqjRdezlARSQHy4VpAKFvUVTEeGdlLy.jpg" onClick={updateCount} />
        </div>
        <div className="container">
        {upgrades.map((upgrade, index) => (
        <div className="upgrade" key={index}>
          <h3>{upgrade.name}</h3>
          <p>{upgrade.description}</p>
          <button>{upgrade.cost}</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default App
