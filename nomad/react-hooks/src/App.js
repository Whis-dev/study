import React, { useState } from 'react';
import './App.css';
import {useInput} from './hooks/useInput';

function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Ms. ", maxLen);
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{item}</h1>
        <button onClick={incrementItem}>increment</button>
        <button onClick={decrementItem}>decrement</button>

        {/* <input placeholder="Name" value={name.value} onChange={name.onChange}/> */}
        <input placeholder="Name" {...name} />
      </header>
    </div>
  );
}

export default App;
