import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';

export default function App() {

  let[count, setCount] = useState(1)
  let [isMorning, setMorning] = useState(false)
  //count = 1
  return (
      <div className={`box ${isMorning ? 'daylight' : ''}`}>
        <i><h1>Good {isMorning ? 'Morning' : 'Night'}</h1></i>
        <button onClick={() => setMorning(!isMorning)}> 
          Update Day
        </button>
        <br/>
        <br/>
        <br/>
        <br/>

       <Message counter={count}/>
        
        <button onClick={()=> setCount(count + 1)}>
          Increment counter
        </button>
        <br/>
        <button onClick={()=> setCount(count - 1)}>
          Decrement counter
        </button>
        <button onClick={()=> setCount(count = 0)}>
          Reset counter
        </button>
      </div>
  );
}
// export default App;