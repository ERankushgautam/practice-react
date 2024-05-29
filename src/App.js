import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15)

  // let counter = 15

  const Addvalue = () => {
    console.log("clicked!", counter);
    // counter = counter + 1
    setCounter(counter + 1)

   
  }
   const removeValue = () => {
      setCounter(counter - 1)
    }
  return (
    <>

      <h1>counter increase</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={Addvalue}>ADD VALUE {counter}</button><br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer:  {counter}</p>

    </>
  )
}




export default App;
