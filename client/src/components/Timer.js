
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import "./Timer.css";



const Timer = () =>   {
    const practiceState = useSelector((state) => state.practice);
    let numCycle=practiceState.NumOfCycles;
    let cycleList= practiceState.CycleList;
    let currntCycle=0;
    let cycleTimes=[];
    for (let x in cycleList)
    {
      console.log(cycleList[x]);
      console.log(cycleList[x].Time);
      cycleTimes.push(cycleList[x].Time);
    }
    console.log(numCycle);
    console.log(cycleTimes);

    const [isActive, setIsActive] = useState(false);
    const [duration, setduration] = useState(cycleTimes);

    console.log(cycleTimes[1]);

    const formatRemainingTime = time => {
      //console.log(time);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
    //console.log(minutes+" "+seconds)
      return `${minutes}:${seconds}`;
    };


    const renderTime = ({ remainingTime }) => {
      //console.log(remainingTime);
      if (remainingTime === 0) {
        setTimeout(()=> setIsActive(0),0);
        if (currntCycle<numCycle)
        {
          currntCycle+=1;
          console.log(currntCycle);
          console.log(cycleTimes[currntCycle]);
          let newDuration=parseInt(cycleTimes[currntCycle]);
          console.log(typeof cycleTimes[currntCycle]);
          setTimeout(()=>setduration(Number(cycleTimes[currntCycle])),0);
        }
        
        //return <div className="timer">Too lale...</div>;
      }

      return (
        <div className="timer">
          {isActive? <div className="text">מחזור 1/3</div>:<button onClick={()=>setIsActive(!isActive)}>התחל מחזור הבא</button>}
          <div className="value">{formatRemainingTime(remainingTime)}</div>
        </div>
      );
    };


  return (
     <div className="App">
     <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={isActive}
          duration={duration}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          //onComplete={() => [true, 1000]}
          //onComplete={handleComplete}
        >
          {renderTime}
        </CountdownCircleTimer>
       </div>
     </div>
  );
}
export default Timer;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
