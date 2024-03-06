import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [isRunning, setIsrunning] = useState(false);
  const [elapsedtime, setElapsedtime] = useState(0);


  

  useEffect(()=>{
    let intervalId;
    if(isRunning){
      intervalId = setInterval(()=>{
        setElapsedtime((prevElapsedtime) => prevElapsedtime + 1);
      },1000)
    }else{
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  },[isRunning])

  const formatTime = (time) => {
    let minute = Math.floor(time/60);
    let remainingSeconds = time%60;
    return `${minute} : ${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

 const reset = () =>{
  setIsrunning(false);
  setElapsedtime(0);
 }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2>Time : {formatTime(elapsedtime)} </h2>
      <button onClick={()=>setIsrunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
