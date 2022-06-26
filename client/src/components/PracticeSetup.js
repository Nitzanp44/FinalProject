import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CycleSetup from './CycleSetup';
import { IntianalCycle, changeMaximum } from '../actions/index';

const PracticeSetup = () =>  {
    const stateCycles = useSelector((state) => state.cycle);
    const statePatient = useSelector((state) => state.patient);
    const stateTherapist = useSelector((state) => state.user);

    const [numCycle, setNumCycle] = useState(0);
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

    const startPractice = () => {
        dispatch(startPractice([statePatient.ID, stateTherapist.ID, stateCycles]));
    }
    
    return (
        <div>
            <div className="d-flex w-100">
                <div className="input-group mb-3 d-flex justify-content-between">
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
                            <input type="number" className="form-control input-sm" max='100' min='0' onChange={(e) => dispatch(changeMaximum(e.target.value))}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex my-5 flex-wrap">
                {[...Array(numCycle)].map((x,i) => {return <CycleSetup key={i} cycleSetupKey={i}/>})}
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <button type="button" className="btn btn-outline-secondary" onClick={startPractice}>התחל אימון</button>
            </div>
        </div>
    )
}
export default PracticeSetup;