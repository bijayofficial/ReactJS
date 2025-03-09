import { useState } from 'react';

import './App.css'

function App() {
  
  
  const [counter , setCounter] = useState(0);

  function addValue() {
    setCounter(counter + 5);
  }
  function removeValue() {
    setCounter(counter - 5);
  }
  return (
    <>
      
      <h1>chai or react</h1>
      <h2>Current Value : {counter}</h2>
      <button type="button" 
      onClick={addValue}  // reference of function: will run after the btn click
      >ADD VALUE</button>
      
      <button type="button"
      onClick={removeValue}
      > REMOVE VALUE </button>

    </>
  )
}

export default App
