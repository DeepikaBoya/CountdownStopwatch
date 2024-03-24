import logo from './logo.svg';
import './App.css';
import Timer from './timer';
import React, { useEffect, useState } from 'react';

const  App=() =>{

const endTime=new Date('june 18,2024 00:00:00').getTime();
const [currentTime,setCurrentTime]=useState(new Date().getTime());
const gap=endTime-currentTime;


const seconds=1000;
const minutes =seconds*60;
const hours=minutes *60;
const days=hours *24;

const remainingdays=Math.floor(gap/days);
const remaininghours=Math.floor((gap%days)/hours);
const remainingMinutes=Math.floor((gap%hours)/minutes);
const remainingSeconds=Math.floor((gap%minutes)/seconds);

useEffect(()=>
{
  const timerID=setInterval(()=>
  {
    setCurrentTime((new Date().getTime()))
  },1000)
  return () => clearInterval(timerID); // Cleanup function to clear the timer

},[])
console.log(currentTime)

  return (
    

    <div>
      <center>
      <Timer days={remainingdays}
      hours={remaininghours}
      minutes={remainingMinutes}
      seconds={remainingSeconds}/>

      </center>
    </div>
    
   
   
  );
}

export default App;
