import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{item}</h1>
        <button onClick={incrementItem}>increment</button>
        <button onClick={decrementItem}>decrement</button>
      </header>
    </div>
  );
}

export default App;
