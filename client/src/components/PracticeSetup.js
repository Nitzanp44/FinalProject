import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CycleSetup from './CycleSetup';
import { IntianalCycle, changeMaximum, startPractice } from '../actions/index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const PracticeSetup = () =>  {
    const stateCycles = useSelector((state) => state.cycle);
    const statePatient = useSelector((state) => state.patient);
    const stateTherapist = useSelector((state) => state.user);

    const [numCycle, setNumCycle] = useState(0);
    const [numMax, setNumMax] = useState(0);
    const dispatch = useDispatch();

    const updateCycle = (val) => {
        let intVal = parseInt(val);
        if(Number.isInteger(intVal)){
            if(intVal < 0){
                setNumCycle(0);
            } else {
            setNumCycle(intVal);
            dispatch(IntianalCycle(intVal));
            }
        } else {
            setNumCycle(0);
        }
    }

    const startPracticeB = () => {
        dispatch(startPractice([statePatient.ID, stateTherapist.ID, stateCycles]));
    }

    const updateMaximum = (val) => {
        dispatch(changeMaximum(val));
        let intVal = parseInt(val);
        if(Number.isInteger(intVal)){
            if(intVal < 0){
                setNumMax(0);
            } else {
            setNumMax(intVal);
            }
        } else {
            setNumMax(0);
        }
    }

    const linkClassName = () => {
        return !(numCycle && statePatient.ID && numMax) ? 'btn btn-outline-secondary disabled' : 'btn btn-outline-secondary';
    }
    
    return (
        <div className='cmpBg p-5'>
            <div className="d-flex w-100">
                <div className="input-group mr-5 pl-5 pr-5 d-flex justify-content-sm-around">
                    <div className="input-group w-25">    
                        <div className="input-group-prepend">
                            <span className="input-group-text">מספר מחזורים</span>
                        </div>
                        <div className="custom-file">
                            <input type="number" className="form-control input-sm" max='10' min='0' onChange={(e) => updateCycle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="input-group w-25">
                        <div className="input-group-prepend">
                            <span className="input-group-text">עומס שריר מרבי</span>
                        </div>
                        <div className="custom-file">
                            <input type="number" className="form-control input-sm" max='100' min='0' onChange={(e) => updateMaximum(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex my-5 flex-wrap">
                {[...Array(numCycle)].map((x,i) => {return <CycleSetup key={i} cycleSetupKey={i}/>})}
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <Link to="/practicePage" type="button" className={'btn btn-outline-secondary ' + (!(numCycle && statePatient.ID && numMax) ? 'disabled' : '')} onClick={startPracticeB}>התחל אימון</Link >
            </div>
        </div>
    )
}
export default PracticeSetup;