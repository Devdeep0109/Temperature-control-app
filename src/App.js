import { useState } from 'react';
import './App.css';

function App() {
  const [val , setVal] = useState(0);
  function handleClick(e){
    if(e.target.id === "btn1"){
      setVal(val+1);
    }
    else if(e.target.id === "btn2"){
      if(val > 0){
        setVal(val - 1);  
      }
    }
    
  }
  return (
    <div className="main">
      <div className='inner'>
        <div className='value'>{val} <span>&#8451;</span></div>
        <button id ="btn1" onClick={handleClick}>Increment</button>
        <button id ="btn2" onClick={handleClick}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
