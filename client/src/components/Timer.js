
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from 'react-redux';
import { useState } from "react";

const Timer = () =>   {
    
  const practiceState = useSelector((state) => state.practice);

  let numCycle = practiceState.NumOfCycles;
  // let cycleList = practiceState.CycleList;
  let cycleList = [2, 10, 30, 40, 50];
  // let cyclePosition = 0;
  let colorsList = ['#004777', '#F7B801', '#A30000', '#A30000'];
  let colorsTimeList = [7, 5, 2, 0];

  const [isActive, setIsActive] = useState(true);
  const [duration, setDuration] = useState(0);
  const [cyclePosition, setCyclePosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [remainingTime, setRemainingTime] = useState(10);

  const initialDuration = () => {
    setTimeout(()=> setDuration(cycleList[0]), 0);
  }

  const formatRemainingTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds}`;
  }

  const nextCycle = () => {
    setTimeout(() => setIsPlaying(!isPlaying), 0);
    setTimeout(() => setIsActive(!isActive), 0);
  }

  const onUpdate = (event) => {
    setTimeout(() => setRemainingTime(event), 0);
  }

  const onComplete = () => {
    if(cyclePosition < cycleList.length){
      setCyclePosition(cyclePosition+1);
      let neweRemainingTime = cycleList[cyclePosition];
      // setTimeout(() => {
      // }, 0);
      setKey(cyclePosition);
      setDuration(neweRemainingTime);
      setRemainingTime(neweRemainingTime);
      setIsPlaying(!isPlaying);
      setIsActive(!isActive);
      return { shouldRepeat: false, delay: 2, newInitialRemainingTime: neweRemainingTime}
    }
  }

  initialDuration();

  return (
      <div className="d-flex justify-content-center timerContainer">
        <div className="position-relative">
          <CountdownCircleTimer
            key={key}
            isPlaying={isPlaying}
            duration={duration}
            colors={colorsList}
            colorsTime={colorsTimeList}
            onComplete={onComplete}
            onUpdate={onUpdate}
          >
          </CountdownCircleTimer>
          <div className="formatRemainingTime position-absolute">
            <h5>{formatRemainingTime(remainingTime)}</h5>
            {(isPlaying) ? <button className="btn btn-outline-danger" onClick={() => setIsPlaying(!isPlaying)}><i class="fa fa-pause"></i></button> : <button className="btn btn-outline-success" onClick={() => setIsPlaying(!isPlaying)}><i class="fa fa-play"></i></button>}
          </div>
        </div>
        { (isActive) ? <h5 className="mt-5 text-center">מחזור {cyclePosition+1} / {cycleList.length}</h5> : <button className="btn btn-outline-danger mt-5" onClick={nextCycle}>התחל מחזור הבא</button>}
      </div>
  );
}

export default Timer;