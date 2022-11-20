import {React, useState } from 'react';
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter(count => count + 10);
    console.log(counter)
  };

  //decrease couter
  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
      console.log(counter)
    }
  };

  //reset counter
  const reset = () => {
    setCounter(0)
    console.log(counter)
  };
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter-output">{counter}</span>
      <div className="btn_container">
        <button className="control_btn" onClick={increase}>+</button>
        <button className="control_btn" onClick={decrease}>-</button>
        <button className="control_btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
