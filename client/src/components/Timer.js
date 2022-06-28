
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector, useDispatch } from 'react-redux';
import { playingChange, cycleComplete } from '../actions/index'
import { useState } from "react";

const Timer = () =>   {
  const dispatch = useDispatch();
  const practiceState = useSelector((state) => state.practice);
  const isPlaying = useSelector((state) => state.isTimerPlaying);
  let cycleTimes = [];
  if(practiceState.CycleList.length > 0){
    practiceState.CycleList.forEach(cycle => {
      cycleTimes.push(cycle.Time);
    })
  }else{
    cycleTimes.push(0);
  }
  let colorsList = ['#004777', '#F7B801', '#A30000', '#A30000'];
  let colorsTimeList = [7, 5, 2, 0];

  const [isActive, setIsActive] = useState(false);
  const [duration, setDuration] = useState(cycleTimes[0]);
  const [cyclePosition, setCyclePosition] = useState(1);
  const [key, setKey] = useState(0);
  const [remainingTime, setRemainingTime] = useState(cycleTimes[0]);
  if(practiceState.CycleList.length > 0){

    const formatRemainingTime = (time) => {
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds}`;
    }

    const nextCycle = () => {
      setTimeout(() => dispatch(playingChange(true)), 0);
      setTimeout(() => setIsActive(!isActive), 0);
    }

    const onUpdate = (event) => {
      setTimeout(() => setRemainingTime(event), 0);
    }

    const onComplete = () => {
      dispatch(cycleComplete);
      let neweRemainingTime = 0;
      if(cyclePosition < cycleTimes.length){
        setTimeout(() => setCyclePosition(cyclePosition+1), 0);
        neweRemainingTime = cycleTimes[cyclePosition];
        setTimeout(() => setKey(cyclePosition), 0);
        setTimeout(() => setDuration(neweRemainingTime), 0);
        setTimeout(() => setRemainingTime(neweRemainingTime), 0);
        setTimeout(() => dispatch(playingChange(false)), 0);
        setTimeout(() => setIsActive(!isActive), 0);
      }
      return { shouldRepeat: true, newInitialRemainingTime: neweRemainingTime}
    }

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
              onUpdate={onUpdate} >
            </CountdownCircleTimer>
            <div className="formatRemainingTime position-absolute">
              <h5>{formatRemainingTime(remainingTime)}</h5>
              {(isPlaying) ? <button className="btn btn-outline-danger" onClick={() => dispatch(playingChange(!isPlaying))}><i className="fa fa-pause"></i></button> : <button className="btn btn-outline-success" onClick={() => dispatch(playingChange(!isPlaying))}><i className="fa fa-play"></i></button>}
            </div>
          </div>
          { (isActive) ? <h5 className="mt-5 text-center">מחזור {cyclePosition} / {cycleTimes.length}</h5> : <button className="btn btn-outline-danger mt-5" onClick={nextCycle}>התחל מחזור הבא</button>}
        </div>
    );
  }else{
    return (
      <div className="d-flex justify-content-center timerContainer">
        <div className="position-relative">
          <CountdownCircleTimer
            isPlaying={false}
            duration={0}
            colors={"#004777"}>
          </CountdownCircleTimer>
          <div className="formatRemainingTime position-absolute">
            <h5>00:00</h5>
          </div>
        </div>
      </div>

    )
  }
}

export default Timer;