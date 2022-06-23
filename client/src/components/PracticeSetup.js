import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CycleSetup from './CycleSetup';
import { startPractice, IntianalCycle, changeMaximum } from '../actions/index';

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
        <div className='practiceSetupContaine'>
            <div className="d-flex">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">עומס שריר מרבי</span>
                    </div>
                    <div class="custom-file">
                        <input type="number" class="form-control input-sm mr-5" max='100' min='0' onChange={(e) => dispatch(changeMaximum(e.target.value))}/>
                    </div>
                    <div class="input-group-prepend">
                        <span class="input-group-text">מספר מחזורים</span>
                    </div>
                    <div class="custom-file">
                    <input type="number" class="form-control input-sm" max='10' min='0' onChange={(e) => updateCycle(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="d-flex my-5 flex-wrap">
                {[...Array(numCycle)].map((x,i) => {return <CycleSetup key={i} cycleSetupKey={i}/>})}
            </div>
            <button type="button" className="btn btn-outline-secondary" onClick={startPractice}>התחל אימון</button>
        </div>
    )
}
export default PracticeSetup;