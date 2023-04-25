
import './App.css';
import Header from './components/Header';
import React,{useState} from 'react';

function App() {

  const [num,setNum]=useState(1);


  function inc()
  {
    setNum(num+1);

  }

  function decrement()
  {
    setNum(num-1);
  }
  return (
<div className="App">
    <Header />
     <div className='main'>
       <h1 className='heading'>{num}</h1>
       <button className='btn' onClick={inc}>increment</button>
       <button className='btn' onClick={decrement}>decrement</button>
      </div>    
</div>
  );
}

export default App;
