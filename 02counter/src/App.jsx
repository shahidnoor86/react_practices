import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card';

function App() {
  const [counter, setCounter] = useState(0);


  function increaseValue() {
    console.log("Increase counter clicked");
    if(counter >= 20) {
      console.log("Value reached max limit");
      return;
    }
    setCounter(counter + 1);
    
    /* setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); */ // Output -> +1

    /* setCounter(prevCounter => prevCounter += 1);
    setCounter(prevCounter => prevCounter += 1);
    setCounter(prevCounter => prevCounter += 1); */ // Output +3
    
  }

  function decreaseValue() {
    console.log("Decrease counter clicked");
    if(counter <= 0) {
      console.log("Value reached min limit");
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      {/* ################# COUNTER #################*/}

      <h1 className='bg-green-400 p-5 rounded-xl mb-4'>Counter App</h1>

      <h3>Counter Value</h3><h2>{counter}</h2>

      <button onClick={increaseValue}>Increase Counter</button>
      <br /><br />
      
      <button onClick={decreaseValue}>Decrease Counter</button>


      {/* ################# REUSABLE #################*/}
      <Card title="Yusuf Jawed" section="II A" age="6"/> 
      <Card title="Sidra Jawed"  section="VII G" age="12"/>
      <Card title="Imaad Khan" age="8"/>
    </>
  )
}

export default App
