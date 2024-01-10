import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const addValue = () =>{
    counter = counter + 1;
    setCounter(counter);
  }

const removeValue = () => {
  counter = counter - 1;
  setCounter(counter)
}
let [counter, setCounter] = useState(5);

  return (
    <>
     <h1>Learning React</h1> 
     <h2>Counter value : {counter} </h2>
     <button onClick={addValue}>Add Value </button>
     <button onClick={removeValue}>Remove Value </button>
    </>
  )
}

export default App
