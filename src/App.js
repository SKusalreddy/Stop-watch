import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [time,setTime] = useState(0)
  const [timerOn,setTimerOn] = useState(false)


  useEffect(()=>{
    let interval = null;

    if(timerOn){
      interval = setInterval(()=>{
        setTime(prevTime => prevTime+10)
      },10)
    }else{
      clearInterval(interval)
    }

    return ()=> clearInterval(interval)

  },[timerOn])

  return (
    <div className="App">
      <div className='timerscreen'>

      
        <div className='timer'>
          <span className='timer-hour'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
          <span className='timer-minute'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
          <span className='timer-second'>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className='buttons-all'>
          {!timerOn && time === 0 && (
              <button className='start-button' onClick={()=> setTimerOn(true)}>Start</button>
          )}
          {timerOn && (
              <button className='stop-button' onClick={()=> setTimerOn(false)}>Stop</button>
          )}
          {!timerOn && time !== 0 && (
              <button className='resume-button' onClick={()=> setTimerOn(true)}>Resume</button>
          )}
          {!timerOn && time > 0 && (
              <button className='reset-button' onClick={()=> setTime(0)}>Reset</button>
            
          )}
        </div>

        
      </div>  
    </div>
  );
}

export default App;
