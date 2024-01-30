import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(5)
 
  const addValue = () =>{  
    setCounter(counter + 1)
  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React</ h1>
        <h2>Counter Value: {counter}</h2><br/>
        <button  className="btn btn-primary"  onClick={addValue}>Add Value </button>
        <br/>
        <button className="btn btn-primary" onClick={removeValue}>Remove Value </button>
      </header>
    </div>
  );
} 

export default App;
