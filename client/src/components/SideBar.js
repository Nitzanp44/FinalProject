import { useSelector, useDispatch } from 'react-redux';
import {changeSideBarRight, changeSideBarLeft, changeView, finishPractice,dataCycels} from '../actions/index'
import Timer from './Timer';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect, useState } from "react";
import "./Timer.css";
const SideBar = () =>  {

    const state = useSelector((state) => state.sideBar);
    const practiceState = useSelector((state) => state.practice);
    const stateCycles = useSelector((state) => state.cycle);
    const dispatch = useDispatch();

//     let numCycle=practiceState.NumOfCycles;
//     let cycleList= practiceState.CycleList;
//     let currntCycle=0;
//     let cycleTimes=[];
//     for (let x in cycleList)
//     {
//       console.log(cycleList[x]);
//       console.log(cycleList[x].Time);
//       cycleTimes.push(cycleList[x].Time);
//     }
//     console.log(numCycle);
//     console.log(cycleTimes);

//     const [isActive, setIsActive] = useState(false);
//     const [duration, setduration] = useState(cycleTimes[currntCycle]);

//     console.log(cycleTimes[1]);

//     const formatRemainingTime = time => {
//       //console.log(time);
//       const minutes = Math.floor((time % 3600) / 60);
//       const seconds = time % 60;
//     //console.log(minutes+" "+seconds)
//       return `${minutes}:${seconds}`;
//     };


//     const renderTime = ({ remainingTime }) => {
//       //console.log(remainingTime);
//       if (remainingTime === 0) {
//         setTimeout(()=> setIsActive(0),0);
//         if (currntCycle<numCycle)
//         {
//           currntCycle+=1;
//           console.log(currntCycle);
//           console.log(cycleTimes[currntCycle]);
//           let newDuration=parseInt(cycleTimes[currntCycle]);
//           console.log(typeof cycleTimes[currntCycle]);
//           setTimeout(()=>setduration(String(cycleTimes[currntCycle])),0);
//         }
        
//         //return <div className="timer">Too lale...</div>;
//       }

//   return (
//     <div className="timer">
//       {isActive? <div className="text">מחזור 1/3</div>:<button onClick={()=>setIsActive(!isActive)}>התחל מחזור הבא</button>}
//       <div className="value">{formatRemainingTime(remainingTime)}</div>
//     </div>
//   );
// };

    let defaultRangeVal = 600;
    const changeRange = () => {
        let rangeVal = document.getElementById('graphRange').value;
        console.log(rangeVal);
        dispatch(changeView(rangeVal));
        defaultRangeVal = rangeVal;
    }

    const finishPractice = () => {
        let dataRigth=state.dataRigth;
        let dataLeft=state.dataLeft;
        let time=state.labels;
        state.dataLeft=[];
        state.dataRigth=[];
        state.label=[];
        let cycels=dispatch(dataCycels(dataRigth,dataLeft,time));
        dispatch(finishPractice(cycels));
    }

    let currentNumCycle=1;
    let NumOfCycles=practiceState.NumOfCycles;


    return (
        <div>
            <div className='sideBar d-flex'>
                <ul className="list-group-flush">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" defaultChecked={true} onChange={() => dispatch(changeSideBarLeft())}/>שמאל
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" defaultChecked={true} onChange={() => dispatch(changeSideBarRight())}/>ימין
                    </li>
                    <li className="list-group-item">
                        <label className="form-label">קנה מידה</label>
                        <input type="range" className="form-range" min="5" max="600" step="1" id="graphRange" defaultValue={defaultRangeVal} onChange={changeRange}/>
                        <div className="d-flex justify-content-between">
                            <span>5 שניות</span>
                            <span>10 דקות</span>
                        </div>
                    </li>
                    {/* <li className="list-group-item">
                        <label className="form-label">:מספר מחזורים</label>
                        <label className="form-label">{currentNumCycle}/{NumOfCycles}</label>
                    </li> */}
                    <li>
                    <Timer/>
                    </li>
                    {/* <li>
                    {/* <CountdownCircleTimer
                        isPlaying={isActive}
                        duration={duration}
                        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                        //onComplete={() => [true, 1000]}
                        //onComplete={handleComplete}
                        >
                        {renderTime}
                    </CountdownCircleTimer>
                    // </li> */}
                    <li className="list-group-item">
                    <button type="button" className="btn btn-primary" variant="link" onClick={finishPractice}>סיום אימון</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar;